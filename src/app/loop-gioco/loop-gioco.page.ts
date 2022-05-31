import { Component, OnInit } from '@angular/core';
import { GiocoService } from '../servizio-gioco.service';
@Component({
  selector: 'app-loop-gioco',
  templateUrl: './loop-gioco.page.html',
  styleUrls: ['./loop-gioco.page.scss'],
})
export class LoopGiocoPage implements OnInit {
  constructor(private servizioGioco: GiocoService) {}
  playerNamesArray: string[];
  currentPlayerIndex: number = 0;
  turnNumber: number = 1;
  ngOnInit() {
    this.playerNamesArray = this.servizioGioco.nomiGiocatori;
  }

  passTurn() {
    if (this.currentPlayerIndex + 1 >= this.playerNamesArray.length) {
      console.log('prossimo turno');
      this.turnNumber++;
      this.currentPlayerIndex = 0;
    } else {
      this.currentPlayerIndex++;
    }
  }
}
