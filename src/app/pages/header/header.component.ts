import { Component, OnInit, Input } from '@angular/core';
import { Stop } from 'src/app/models/stop.model';
import { TanService } from 'src/app/services/tan.service';
import { DataService } from 'src/app/services/data.service';
import { mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    @Input()
    showClient: boolean;

    public clients: Stop[] = [];
    public selectedClientId: string;

    constructor(
        private dataService: DataService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
}
