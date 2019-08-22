import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Logger } from './logger.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { ParentServices } from './parent.service';
import { Stop } from '../models/stop.model';

const LOGGER = new Logger('TanService');
const BASE_URL: string = environment.baseUrlTan;

@Injectable()
export class TanService extends ParentServices {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    /**
     * Get list hours
     */
    getTanStops(): Observable<Stop[]> {
        const url = BASE_URL + 'arrets.json';

        const httpHeaders = new HttpHeaders()
            .append('Content-Type', 'application/json');
            // .append('Access-Control-Allow-Origin', '*')
            // .append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
            // .append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');

        return new Observable(obs => {
            this.http.get<Stop[]>(url, { headers: httpHeaders, responseType: 'json' })
                .subscribe(
                    (response) => {
                        if (response) {
                            obs.next(response);
                        } else {
                            obs.error('No response when get stops list');
                        }
                    },
                    (error) => {
                        LOGGER.error(`Error ${error.status} during get stops ${error.message}. Server cause : ${error.error}`);
                        obs.error(`Error ${error.status} during get stops`);
                    });
        });
    }
}
