import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Logger } from '../../services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { TanService } from 'src/app/services/tan.service';
import { Stop } from 'src/app/models/stop.model';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

const LOGGER = new Logger('HomePage');

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public stops: Stop[] = [];
    public stopsFiltered: Stop[] = [];
    public stopFormControl = new FormControl();

    constructor(
        private router: Router,
        private tanService: TanService,
        public navController: NavController
    ) { }

    ngOnInit() {

        this.tanService.getTanStops().subscribe(res => {
            this.stops = res;
            this.stopsFiltered = res;
        });
    }

    onInputChange(value) {
        this.stopsFiltered = this.stops.filter(stop => stop.libelle.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) >= 0);
    }
}
