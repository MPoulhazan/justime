import { Bookmark } from 'src/app/models/bookmark.model';
import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { BusCard, Bus } from 'src/app/models/bus.model';
import { TanService } from 'src/app/services/tan.service';
import { AbstractPage } from '../abstractPage.page';

const LOGGER = new Logger('FavoritePage');

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.page.html',
    styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage extends AbstractPage {

    bookmarkList: Bookmark[] = [];
    noBookmarks = false;

    constructor(
        private dataService: DataService,
        private router: Router,
        private bookmarkService: BookmarkService,
        private tanService: TanService
    ) {
        super();
    }

    ngOnInit() {
        this.bookmarkService.getBookmarksInStorage().then(bm => this.bookmarkList = bm);
    }

    ionViewWillEnter() {
        this.initDatas();

        this.bookmarkService.getBookmarksInStorage().then(bm => {

            if (bm.length > 0) {
                this.noBookmarks = false;
                this.bookmarkList = bm;
                this.getBookmarkHours(bm);
            } else {
                this.noBookmarks = true;
            }

        });
    }

    getBookmarkHours(bookmarks: Bookmark[]) {
        bookmarks.forEach(bm => {
            this.tanService.getHoursAtStop(bm.stopId).subscribe(bus => {
                console.log('Filter', bus.filter(itBus => itBus.sens === bm.sens && itBus.numLigne === bm.lineId));
                const busCardList = bus.filter(itBus => itBus.sens === bm.sens && itBus.numLigne === bm.lineId);

                busCardList.forEach(busCadrs => {
                    const busCardAtStop = this.finalBusCardAtStop.find((busCard: BusCard) => {
                        return busCard.bus.numLigne === busCadrs.numLigne && busCard.bus.sens === busCadrs.sens;
                    });
                    if (!busCardAtStop) {
                        this.finalBusCardAtStop.push(new BusCard(busCadrs, [busCadrs.temps]));
                    } else {
                        if (!busCardAtStop.nextHours) {
                            busCardAtStop.nextHours = [];
                        }
                        if (busCardAtStop.nextHours) {
                            busCardAtStop.nextHours.push(busCadrs.temps);
                        }
                    }

                    // this.finalBusCardAtStop.push(new BusCard(bus.arret, ));
                });
            });
        });
    }

}

