import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

    // This property define if the model of loading template to display is card
    @Input()
    isCard = false;

    // Number of rows of elements's loading template, default is 4
    @Input()
    numberOfRows = 4;

    // Number of col of elements's loading template by row; default is 2
    @Input()
    numberOfCols = 2;

    // Used for loop in template HTML
    numberOfRowsTab = [];
    numberOfColsTab = [];

    constructor() {

    }

    ngOnInit() {
        // In template HTML, can only iterate on array so transform index to array of n elements
        this.numberOfRowsTab = Array(this.numberOfRows).fill(0).map((x, i) => i);
        this.numberOfColsTab = Array(this.numberOfCols).fill(0).map((x, i) => i);
    }

}
