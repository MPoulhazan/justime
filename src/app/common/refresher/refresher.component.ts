import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-refresher',
    templateUrl: './refresher.component.html',
    styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit {

    @Output() refresh = new EventEmitter();

    constructor() {
    }

    ngOnInit() { }

    doRefresh(event) {
        this.refresh.emit();

        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }

}
