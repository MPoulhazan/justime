import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss'],
})
export class CardCounterComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    value: string;

    @Input()
    color: string;

  constructor() { }

  ngOnInit() {}

}
