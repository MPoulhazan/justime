import { OnInit } from '@angular/core';
import { Logger } from '../services/logger.service';
import { BusCard } from '../models/bus.model';

const LOGGER = new Logger('AbstractPage');

export abstract class AbstractPage implements OnInit {

    public finalBusCardAtStop: BusCard[] = [];

    constructor() {}

    ngOnInit() {

    }

    initDatas() {
        this.finalBusCardAtStop = [];
    }
}
