import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  recepiesUrl: string;
}

@Injectable()
export class ConfigService {
  configUrl =
    'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=50b92134&app_key=2fad6852920d5b6c6682d26c8167cf00';
  constructor(private http: HttpClient) {}
  getConfig() {
    return this.http
      .get<Config>(this.configUrl)
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
