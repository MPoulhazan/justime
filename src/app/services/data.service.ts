import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Services for sharing datas between components
 */
@Injectable()
export class DataService {

    private changeClientSource = new BehaviorSubject('');
    currentMessage = this.changeClientSource.asObservable();

    constructor() { }

    changeClient(message: string) {
        this.changeClientSource.next(message);
    }
}
