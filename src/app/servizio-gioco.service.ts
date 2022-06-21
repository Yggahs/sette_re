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
  arrayIntensitaUno: string[] = [];

  urlFirebase: string =
    'https://firestore.googleapis.com/v1/projects/sette-re-c674a/databases/(default)/documents/domande/intensita_';

  urlTemp: string;
  currentQuestion: string = '';
  getFrasi(instensita: number) {
    switch (instensita) {
      case 1:
        this.numeroIntensita = 'uno';
        break;
      case 2:
        this.numeroIntensita = 'due';
        break;
      case 3:
        this.numeroIntensita = 'tre';
        break;
      case 4:
        this.numeroIntensita = 'quattro';
        break;
      case 5:
        this.numeroIntensita = 'cinque';
        break;
      case 6:
        this.numeroIntensita = 'sei';
        break;
      case 7:
        this.numeroIntensita = 'sette';
        break;
      default:
        this.numeroIntensita = 'uno';
        break;
    }
    this.urlTemp = this.urlFirebase + this.numeroIntensita;

    return this.http.get(this.urlTemp);
  }
}
