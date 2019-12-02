import { Observable, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Logger } from '../../services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { TanService } from 'src/app/services/tan.service';
import { Stop } from 'src/app/models/stop.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startWith, map, finalize, retry, take, repeatWhen } from 'rxjs/operators';
import { BusCard } from 'src/app/models/bus.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { Bookmark } from 'src/app/models/bookmark.model';
import { AbstractPage } from '../abstractPage.page';

const LOGGER = new Logger('HomePage');

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage extends AbstractPage {

    public stops: Stop[] = [];
    public stopsFiltered: Stop[] = [];
    public stopsFormGroup: FormGroup;
    public bookmarks: Bookmark[];
    public isLoadingStops = true;
    public isCleared = true;

    constructor(
        private router: Router,
        private tanService: TanService,
        private bookmarkService: BookmarkService,
        public navController: NavController,
        private formBuilder: FormBuilder,
        private dataService: DataService
    ) {
        super();
     }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit() {

        // Init Form
        this.initForm();

        this.tanService.getTanStops().pipe(
            take(1),
            finalize(() => {
                this.isLoadingStops = false;
                this.dataService.setAppLoaded('App readys');
            }),
            retry(2)
        ).subscribe(res => {
            this.stops = res;
            this.stopsFiltered = res;
        }, err => {
            LOGGER.error('Unable to call tan API : ', err);
        });

        this.getAllBookmarks();
    }

    initForm() {
        this.stopsFormGroup = this.formBuilder.group({
            stop: ['', Validators.required]
        });
    }

    onInputChange(value) {
        this.stopsFiltered = this.stops.filter(stop => stop.libelle.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0);
    }

    submitStops() {
        const source = interval(5000);
        this.isCleared = true;

        this.initDatas();
        const codeLieu = this.stops.find(stop => stop.libelle === this.stopsFormGroup.value.stop).codeLieu;

        // Get each bus for this stop
        this.tanService.getHoursAtStop(codeLieu)
        // .pipe(
        //     repeatWhen(TODO)
        // )
        .subscribe(allBusAtStop => {

            allBusAtStop.forEach(bus => {
                const busCardAtStop = this.finalBusCardAtStop.find((busCard: BusCard) => {
                    return busCard.bus.numLigne === bus.numLigne && busCard.bus.sens === bus.sens;
                });
                if (!busCardAtStop) {
                    this.finalBusCardAtStop.push(new BusCard(bus, [bus.temps]));
                } else {
                    if (!busCardAtStop.nextHours) {
                        busCardAtStop.nextHours = [];
                    }
                    if (busCardAtStop.nextHours) {
                        busCardAtStop.nextHours.push(bus.temps);
                    }
                }
            });
        });
    }

    getAllBookmarks() {
        // Call service at start to initialize bookmark list
        this.bookmarkService.getBookmarksInStorage();
    }

    clearInput(): void {
        this.stopsFormGroup.reset({stop: ''});
        this.isCleared = false;
    }
}
