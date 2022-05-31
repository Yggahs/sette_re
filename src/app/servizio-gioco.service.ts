import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GiocoService {
  constructor() {}
  numeroGiocatori: number;
  nomiGiocatori: string[];
}
