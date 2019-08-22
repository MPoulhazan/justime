import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Logger } from './logger.service';

const LOGGER = new Logger('Services');

@Injectable()
export class ParentServices {

    constructor() {
    }

    protected handleError(error: HttpErrorResponse) {
        if ( error.error instanceof ErrorEvent ) {
            LOGGER.error('Error: ', error.message);
        } else {
            LOGGER.error(`Error : ${error.status} : ${error.message}`);
        }
        return throwError(error);
    }
}