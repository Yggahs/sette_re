import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GiocoService } from '../servizio-gioco.service';

@Component({
  selector: 'app-loop-gioco',
  templateUrl: './loop-gioco.page.html',
  styleUrls: ['./loop-gioco.page.scss'],
})
export class LoopGiocoPage implements OnInit {
  playerNamesArray: string[];
  currentPlayerIndex: number = 0;
  turnNumber: number = 1;
  currentQuestion: string = '';
  arrayIntensita: string[] = [];
  aumentoIntensita: boolean = false;

  constructor(private servizioGioco: GiocoService) {}

  ngOnInit() {
    this.playerNamesArray = this.servizioGioco.nomiGiocatori;

    console.log(this.servizioGioco.getFrasi());

    this.servizioGioco.getFrasi().subscribe(
      (x: any) => {
        Object.keys(x.fields).forEach((key) => {
          this.arrayIntensita.push(x.fields[key].stringValue);
        });
        this.currentQuestion =
          this.arrayIntensita[
            Math.floor(Math.random() * this.arrayIntensita.length)
          ];
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  passTurn() {
    if (this.currentPlayerIndex + 1 >= this.playerNamesArray.length) {
      this.arrayIntensita = [];
      this.turnNumber++;
      this.currentPlayerIndex = 0;
      this.aumentoIntensita = true;
      this.servizioGioco.getFrasi().subscribe(
        (x: any) => {
          Object.keys(x.fields).forEach((key) => {
            this.arrayIntensita.push(x.fields[key].stringValue);
          });
          this.currentQuestion =
            this.arrayIntensita[
              Math.floor(Math.random() * this.arrayIntensita.length)
            ];
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.aumentoIntensita = false;
        }
      );
    } else {
      this.currentPlayerIndex++;
    }
    this.currentQuestion =
      this.arrayIntensita[
        Math.floor(Math.random() * this.arrayIntensita.length)
      ];
  }
}
