import { Component, OnInit, Input } from '@angular/core';
import { BusCard } from 'src/app/models/bus.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-card-bus',
  templateUrl: './card-bus.component.html',
  styleUrls: ['./card-bus.component.scss'],
})
export class CardBusComponent implements OnInit {

    @Input()
    busCard: BusCard;

  constructor(
      private storageService: StorageService
  ) { }

  ngOnInit() {}

  addToFavorites(idligne, idStop) {
    console.log(idligne, idStop);
    this.storageService.saveBookmarksInStorage(idligne, idStop);
  }

}
