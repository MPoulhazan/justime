/**
 * This file comes from swipe-tab project available on Git
 * https://gist.github.com/siddhartha-gupta/f3d40620d8cd8ae6784ab6c4b57227dc
 */

import {
    Directive,
    ElementRef,
    Output,
    EventEmitter,
    OnInit,
    Renderer2,
    OnDestroy
} from '@angular/core';
import 'hammerjs';

@Directive({
    selector: '[appSwipetab]',
})

export class SwipeTabDirective implements OnInit, OnDestroy {
    @Output() tabChange = new EventEmitter();

    private currentTabIndex = 0;
    private tabCount = 0;
    private swipeCoords: [number, number];
    private swipeDuration: number;
    private browserSwipeGesture: HammerManager;
    private touchListenersFns = [];
    tabNames: string[] = [];

    constructor(
        // tslint:disable-next-line: variable-name
        public _el: ElementRef,
        // tslint:disable-next-line: variable-name
        private _renderer: Renderer2
    ) {
    }

    ngOnInit() {
        const tabsList = this._el.nativeElement.querySelectorAll('ion-tab-button');

        for (let i = 0, len = tabsList.length; i < len; i += 1) {
            this.tabNames.push(tabsList[i].tab);
        }
        this.tabCount = this.tabNames.length - 1;
    }

    onTabInitialized(tabName: string): void {

        this.currentTabIndex = this.tabNames.indexOf(tabName);

        const currentTabName = `app-${tabName}`;
        const elem = this._el.nativeElement.querySelectorAll(currentTabName)[0];

        if (!elem) {
            throw new Error('Make sure tab selector has app prefix');
        } else {
            const content = elem.getElementsByTagName('ion-content')[0];

            if (content.querySelector('.swipe-area') === null) {
                this.createWrapperDiv(content);
            }
        }
    }

    createWrapperDiv(content: HTMLElement): void {
        const divElement = this._renderer.createElement('div');
        this._renderer.addClass(divElement, 'swipe-area');
        this._renderer.insertBefore(content, divElement, null);

        while (content.children.length > 1) {
            const child = content.children[0];
            this._renderer.removeChild(content, child);
            this._renderer.appendChild(divElement, child);
        }

        this.addEventListeners(divElement);
    }

    addEventListeners(divElement: HTMLElement) {
        if ('ontouchstart' in document.documentElement) {
            this.touchListenersFns.push(
                this._renderer.listen(divElement, 'touchstart', ($event) => {
                    this.deviceSwipeHandler($event, 'start');
                }),
                this._renderer.listen(divElement, 'touchend', ($event) => {
                    this.deviceSwipeHandler($event, 'end');
                })
            );
        } else {
            this.browserSwipeGesture = new Hammer(divElement);
            this.browserSwipeGesture.on('swipe', (event) => {
                this.browserSwipeHandler(event);
            });
        }
    }

    deviceSwipeHandler(event: TouchEvent, status: string): void {
        const coords: [number, number] = [event.changedTouches[0].pageX, event.changedTouches[0].pageY];
        const time = new Date().getTime();

        if (status === 'start') {
            this.swipeCoords = coords;
            this.swipeDuration = time;
        } else if (status === 'end') {
            const direction = [coords[0] - this.swipeCoords[0], coords[1] - this.swipeCoords[1]];
            const duration = time - this.swipeDuration;

            if (duration < 1000 && Math.abs(direction[0]) > 50
                && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) {
                if (direction[0] > 0) {
                    this.moveBackward();
                } else {
                    this.moveForward();
                }
            }
        }
    }

    browserSwipeHandler(event) {
        switch (event.direction) {
            case 2:
                this.moveForward();
                break;

            case 4:
                this.moveBackward();
                break;

            default:
                break;
        }
    }

    moveForward(): void {
        if (this.currentTabIndex < this.tabCount) {
            this.currentTabIndex++;
            this.tabChange.emit(this.tabNames[this.currentTabIndex]);
        }
    }

    moveBackward(): void {
        if (this.currentTabIndex > 0) {
            this.currentTabIndex--;
            this.tabChange.emit(this.tabNames[this.currentTabIndex]);
        }
    }

    ngOnDestroy() {
        if (this.touchListenersFns.length > 0) {
            this.touchListenersFns.forEach(fn => fn());
        } else if (this.browserSwipeGesture) {
            this.browserSwipeGesture.off('swipe');
        }
    }
}
