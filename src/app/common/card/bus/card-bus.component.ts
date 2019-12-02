import { Component, OnInit, Input } from '@angular/core';
import { BusCard } from 'src/app/models/bus.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { Bookmark } from 'src/app/models/bookmark.model';

@Component({
    selector: 'app-card-bus',
    templateUrl: './card-bus.component.html',
    styleUrls: ['./card-bus.component.scss'],
})
export class CardBusComponent implements OnInit {

    @Input()
    busCard: BusCard;

    @Input()
    idx: BusCard;

    isBookmarked: boolean;

    constructor(
        private bookmarkService: BookmarkService
    ) { }

    ngOnInit() {
        this.isBookmarked = this.isInBookmark();
    }

    addToFavorites(idligne, idStop, sens) {
        const bookmark = new Bookmark(idligne, idStop, sens);
        if (this.isBookmarked) {
            this.bookmarkService.removeBookmarkInStorage(bookmark);
        } else {
            this.bookmarkService.saveBookmarkInStorage(bookmark);
        }
        this.isBookmarked = !this.isBookmarked;
    }

    isInBookmark(): boolean {
        const refBookmark = new Bookmark(this.busCard.bus.numLigne, this.busCard.bus.arret, this.busCard.bus.sens);
        return this.bookmarkService.bookmarks.filter(bookmark =>
            bookmark.lineId === refBookmark.lineId && bookmark.stopId === refBookmark.stopId).length > 0;
    }

}
