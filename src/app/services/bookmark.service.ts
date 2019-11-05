import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Storage } from '@ionic/storage';
import { Bookmark } from '../models/bookmark.model';

const logger = new Logger('BookmarkService');
const BOOKMARK_STORAGE_KEY = 'bookmark';


@Injectable({
    providedIn: 'root'
})
export class BookmarkService {

    public bookmarks: Bookmark[];

    constructor(
        private storage: Storage
    ) { }

    public saveBookmarkInStorage(bookmark: Bookmark): void {

        this.getBookmarksInStorage().then(oldBookmarks => {
            let bookmarksTab = oldBookmarks;
            if (!Array.isArray(oldBookmarks)) {
                this.removeAllBookmarksInStorage();
                bookmarksTab = [];
            }
            bookmarksTab.push(bookmark);

            this.storage.set(BOOKMARK_STORAGE_KEY, bookmarksTab)
                .catch(() => logger.error('Persist bookmarks failed'))
                .finally(() => {
                    logger.debug('Bookmark bus persisted');
                });
        });
    }

    public getBookmarksInStorage(): Promise<Bookmark[]> {

        return this.storage.get(BOOKMARK_STORAGE_KEY)
            .then(bookmarks => this.bookmarks = bookmarks)
            .catch(() => logger.error('Get bookmarks failed'))
            .finally(() => {
                logger.debug('get bookmark bus success');
            });
    }

    public removeBookmarkInStorage(bookmark): void {
        this.getBookmarksInStorage().then(oldBookmarks => {
            let bookmarksTab = oldBookmarks;
            if (!Array.isArray(oldBookmarks)) {
                this.removeAllBookmarksInStorage();
                bookmarksTab = [];
            }
            const filteredBookmark = bookmarksTab.filter(oldBookmark =>
                oldBookmark.lineId !== bookmark.lineId || oldBookmark.stopId !== bookmark.stopId);

            this.storage.set(BOOKMARK_STORAGE_KEY, filteredBookmark)
                .catch(() => logger.error('Remove bookmarks failed'))
                .finally(() => {
                    logger.debug('Bookmark bus removed');
                });
        });
    }

    public removeAllBookmarksInStorage(): void {
        this.storage.remove(BOOKMARK_STORAGE_KEY)
            .catch(() => logger.error('Remove bookmarks failed'))
            .finally(() => {
                logger.debug('Bookmark bus removed');
            });
    }
}
