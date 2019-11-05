import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { BookmarkService } from 'src/app/services/bookmark.service';

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
        private bookmarkService: BookmarkService
    ) { }

    ngOnInit() {
        this.bookmarkService.getBookmarksInStorage().then(res => console.log(res));
    }

    ionViewWillEnter() {
        this.bookmarkService.getBookmarksInStorage().then(bm => console.log(bm));
    }
}
