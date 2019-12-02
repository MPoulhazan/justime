import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Services for sharing datas between components
 */
@Injectable()
export class DataService {

    private appLoaded = new BehaviorSubject('');
    currentMessage = this.appLoaded.asObservable();

    constructor() { }

    setAppLoaded(message: string) {
        this.appLoaded.next(message);
    }
}
