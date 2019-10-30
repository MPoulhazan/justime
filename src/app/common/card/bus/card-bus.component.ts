import { Component, OnInit, Input } from '@angular/core';
import { BusCard } from 'src/app/models/bus.model';

@Component({
  selector: 'app-card-bus',
  templateUrl: './card-bus.component.html',
  styleUrls: ['./card-bus.component.scss'],
})
export class CardBusComponent implements OnInit {

    @Input()
    busCard: BusCard;

  constructor() { }

  ngOnInit() {}

  addToFavorites(idligne, idStop) {
    console.log(idligne, idStop);
  }

}
