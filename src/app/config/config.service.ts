import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from '../Recipe';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiURL =
    'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=50b92134&app_key=2fad6852920d5b6c6682d26c8167cf00';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getRecipes(): Observable<Recipe[]> {
    return this.httpClient
      .get<Recipe[]>(this.apiURL)
      .pipe(catchError(this.errorHandler));
  }
  getRecipesByID(id: number): Observable<Recipe> {
    return this.httpClient
      .get<Recipe>(this.apiURL + id)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: {
    error: {
      message: string;
    };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
