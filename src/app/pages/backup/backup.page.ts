import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/services/logger.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

const LOGGER = new Logger('BackupPage');

@Component({
    selector: 'app-backup',
    templateUrl: './backup.page.html',
    styleUrls: ['./backup.page.scss'],
})
export class BackupPage implements OnInit {

    constructor(
        private dataService: DataService,
        private router: Router,
    ) { }

    ngOnInit() {

    }
}
