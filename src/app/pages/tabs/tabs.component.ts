import { Component, OnInit, ViewChild } from '@angular/core';
import { SwipeTabDirective } from 'src/app/directives/swipe-tab.directive';
import { IonTabs } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

    // Swipe events
    @ViewChild(SwipeTabDirective) swipeTabDirective: SwipeTabDirective;
    @ViewChild('myTabs') tabRef: IonTabs;

    public appReady = false;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.dataService.currentMessage.subscribe(ready => {
            if (ready) {
                this.appReady = true;
            }
        });
    }

    /**
     * Used for swipe event
     * @param $event: event
     */
    ionTabsDidChange($event) {
      this.swipeTabDirective.onTabInitialized($event.tab);
    }

    /**
     * Update tab when swipped event
     * @param $event: event
     */
    onTabChange($event) {
      this.tabRef.select($event);
    }
}
