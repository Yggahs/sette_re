import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GiocoService {
  constructor(private http: HttpClient) {}
  numeroGiocatori: number;
  nomiGiocatori: string[];
  numeroIntensita: string;
  arrayCategorieSelezionate: string[] = [];
  toggleCategorie: boolean = false;
  urlDomande: string =
    'https://firestore.googleapis.com/v1/projects/sette-re-c674a/databases/(default)/documents/domande_2/collezione_domande';
  urlCategorie: string =
    'https://firestore.googleapis.com/v1/projects/sette-re-c674a/databases/(default)/documents/categorie/collezione_categorie';
  currentQuestion: string = '';

  getFrasi() {
    return this.http.get(this.urlDomande);
  }

  getCategorie() {
    return this.http.get(this.urlCategorie);
  }
}
