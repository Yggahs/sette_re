import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GiocoService } from '../servizio-gioco.service';
@Component({
  selector: 'app-name-players',
  templateUrl: './name-players.page.html',
  styleUrls: ['./name-players.page.scss'],
})
export class NamePlayersPage implements OnInit {
  oggettoNomi: any = {};
  numeroGiocatori = this.servizioGioco.numeroGiocatori;
  nomiGiocatoriForm = new FormGroup({ nome0: new FormControl('') });
  arrayIterator: any;
  arrayNomi: string[];
  constructor(private servizioGioco: GiocoService) {
    this.arrayIterator = Array(this.servizioGioco.numeroGiocatori)
      .fill(1)
      .map((x, i) => i);
  }

  ngOnInit() {
    for (let i = 0; i < this.numeroGiocatori; i++) {
      this.oggettoNomi['nome' + i] = new FormControl(
        'Giocatore ' + (i + 1),
        Validators.required
      );
    }
    this.nomiGiocatoriForm = new FormGroup(this.oggettoNomi);
  }
  onSubmit() {
    console.log(this.nomiGiocatoriForm.value);
    for (let nome of this.nomiGiocatoriForm.value) {
      this.arrayNomi.push(nome);
    }
    console.log(this.arrayNomi);
  }
}
