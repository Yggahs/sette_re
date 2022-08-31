import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GiocoService } from '../servizio-gioco.service';

@Component({
  selector: 'app-loop-gioco',
  templateUrl: './loop-gioco.page.html',
  styleUrls: ['./loop-gioco.page.scss'],
})
export class LoopGiocoPage implements OnInit {
  turnNumber: number = 1;
  currentQuestion: string = '';
  arrayIntensita: string[] = [];
  aumentoIntensita: boolean = false;

  constructor(private servizioGioco: GiocoService) {}

  ngOnInit() {
    this.servizioGioco.getFrasi().subscribe(
      (x: any) => {
        this.popolaArrayIntensita(x);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  passTurn() {
    this.arrayIntensita = [];
    this.turnNumber++;
    this.aumentoIntensita = true;
    this.servizioGioco.getFrasi().subscribe(
      (x: any) => {
        this.popolaArrayIntensita(x);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.aumentoIntensita = false;
      }
    );
    this.currentQuestion =
      this.arrayIntensita[
        Math.floor(Math.random() * this.arrayIntensita.length)
      ];
  }
  popolaArrayIntensita(oggettoDomande: any) {
    oggettoDomande.fields.arrayIntensita.arrayValue.values.forEach(
      (intensita, i) => {
        if (i == this.turnNumber - 1) {
          intensita.mapValue.fields.domande.arrayValue.values.forEach(
            (tracce, j) => {
              if (this.servizioGioco.toggleCategorie) {
                this.servizioGioco.arrayCategorieSelezionate.forEach(
                  (categoriaSelezionata, k) => {
                    if (
                      categoriaSelezionata ==
                      tracce.mapValue.fields.categoria.stringValue
                    ) {
                      this.arrayIntensita.push(
                        tracce.mapValue.fields.domanda.stringValue
                      );
                    }
                  }
                );
              } else {
                this.arrayIntensita.push(
                  tracce.mapValue.fields.domanda.stringValue
                );
              }
            }
          );
        }
      }
    );
    this.currentQuestion =
      this.arrayIntensita[
        Math.floor(Math.random() * this.arrayIntensita.length)
      ];
    console.log(this.arrayIntensita);
  }
}
