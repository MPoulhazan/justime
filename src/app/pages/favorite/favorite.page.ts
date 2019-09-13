import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

const LOGGER = new Logger('FavoritePage');

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.page.html',
    styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

    constructor(
        private dataService: DataService,
        private router: Router,
    ) { }

    ngOnInit() {

    }
}
