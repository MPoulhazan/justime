import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Logger } from '../../services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { TanService } from 'src/app/services/tan.service';
import { Stop } from 'src/app/models/stop.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { BusCard } from 'src/app/models/bus.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { Bookmark } from 'src/app/models/bookmark.model';

const LOGGER = new Logger('HomePage');

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public stops: Stop[] = [];
    public stopsFiltered: Stop[] = [];
    public stopsFormGroup: FormGroup;
    public finalBusCardAtStop: BusCard[] = [];
    public bookmarks: Bookmark[];

    constructor(
        private router: Router,
        private tanService: TanService,
        private bookmarkService: BookmarkService,
        public navController: NavController,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {

        // Init Form
        this.stopsFormGroup = this.formBuilder.group({
            stop: ['', Validators.required]
        });

        this.tanService.getTanStops().subscribe(res => {
            this.stops = res;
            this.stopsFiltered = res;
        });

        this.getAllBookmarks();
    }

    onInputChange(value) {
        this.stopsFiltered = this.stops.filter(stop => stop.libelle.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0);
    }

    submitStops() {
        this.initDatas();
        const codeLieu = this.stops.find(stop => stop.libelle === this.stopsFormGroup.value.stop).codeLieu;

        // Get each bus for this stop
        this.tanService.getHoursAtStop(codeLieu).subscribe(allBusAtStop => {

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

    initDatas() {
        this.finalBusCardAtStop = [];
    }

    getAllBookmarks() {
        // Call service at start to initialize bookmark list
        this.bookmarkService.getBookmarksInStorage();
    }
}
