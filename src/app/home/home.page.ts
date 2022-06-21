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
    private servizioGioco: GiocoService
  ) {}

  chosenNumber: boolean = false;
  categoryToggle: boolean = false;
  array: number[] = [1, 2, 3];

  ngOnInit() {
    for (let categorie in this.array) {
      console.log(categorie);
    }
  }

  async pickPlayerCount() {
    const picker = await this.pickerController.create({
      buttons: [
        { text: 'Cancella', role: 'cancel' },
        {
          text: 'Conferma',
          handler: (selected) => {
            this.servizioGioco.numeroGiocatori = selected.numbers.value;
            this.chosenNumber = true;
          },
        },
      ],
      columns: [
        {
          name: 'numbers',
          options: [
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10', value: 10 },
            { text: '11', value: 11 },
            { text: '12', value: 12 },
          ],
        },
      ],
    });
    await picker.present();
  }

  toggleCategories() {
    this.categoryToggle = !this.categoryToggle;
    console.log(this.categoryToggle);
  }
}
