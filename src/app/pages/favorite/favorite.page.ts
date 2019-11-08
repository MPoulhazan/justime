import { Bookmark } from 'src/app/models/bookmark.model';
import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { BusCard } from 'src/app/models/bus.model';
import { TanService } from 'src/app/services/tan.service';

const LOGGER = new Logger('FavoritePage');

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.page.html',
    styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

    bookmarkList: Bookmark[] = [];
    public finalBusCardAtStop: BusCard[] = [];

    constructor(
        private dataService: DataService,
        private router: Router,
        private bookmarkService: BookmarkService,
        private tanService: TanService
    ) { }

    ngOnInit() {
        this.bookmarkService.getBookmarksInStorage().then(bm => this.bookmarkList = bm);
    }

    ionViewWillEnter() {
        this.bookmarkService.getBookmarksInStorage().then(bm => {
            this.bookmarkList = bm;
            // this.getBookmarkHours(bm);
        });
    }

    getBookmarkHours(bookmarks: Bookmark[]) {
        bookmarks.forEach(bm => {
            console.log(bm);
            this.tanService.getHoursAtStopWithLineId(bm.stopId, bm.lineId).subscribe(bus => {
                console.log('======> ' + bus);
            });
        });
    }

}
