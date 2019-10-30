import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Storage } from '@ionic/storage';

const logger = new Logger('StorageService');
const BOOKMARK_STORAGE_KEY = 'bookmark';

export class BusParams {
    lineId: string;
    stopId: string;

    constructor(
        lineId: string,
        stopId: string
    ) {
        this.lineId = lineId;
        this.stopId = stopId;
    }
}

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(
        private storage: Storage
    ) { }

    public saveBookmarksInStorage(lineId: string, stopId): void {
        const busParams = new BusParams(lineId, stopId);

        this.storage.set(BOOKMARK_STORAGE_KEY, busParams)
            .catch(() => logger.error('Persist bookmarks failed'))
            .finally(() => {
                logger.debug('Bookmark bus persisted');
            });
    }


    public getBookmarksInStorage(): Promise<string> {

        return this.storage.get(BOOKMARK_STORAGE_KEY)
            .catch(() => logger.error('Get bookmarks failed'))
            .finally(() => {
                logger.debug('get bookmark bus success');
            });
    }
}
