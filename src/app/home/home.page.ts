import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { GiocoService } from '../servizio-gioco.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private pickerController: PickerController,
    public servizioGioco: GiocoService
  ) {}

  knowRules: boolean = false;
  chosenNumber: boolean = false;
  categoryToggle: boolean = false;
  arrayCategorie: string[] = [];
  oggettoCategorie: any;
  ngOnInit() {
    this.servizioGioco.getCategorie().subscribe(
      (x: any) => {
        this.oggettoCategorie = x.fields.arrayCategorie.arrayValue.values;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.oggettoCategorie.forEach((categoria) => {
          this.arrayCategorie.push(categoria.stringValue);
        });
      }
    );
  }

  toggleCategories() {
    this.servizioGioco.toggleCategorie = !this.servizioGioco.toggleCategorie;
  }

  selezionaCategorie() {
    if (this.servizioGioco.toggleCategorie) {
      this.servizioGioco.arrayCategorieSelezionate = this.arrayCategorie;
    }
  }
  toggleRules() {
    this.knowRules = !this.knowRules;
    console.log(this.knowRules);
  }
}
