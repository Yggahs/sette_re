import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private playerNumber:number;
  private numbers:any;
  constructor(private pickerController:PickerController) {}
   
  async pickPlayerCount(){
    const picker =await this.pickerController.create({
      buttons:[{text:"Conferma",handler:(selected)=>{this.playerNumber=selected.number.value;}}],columns:[{name:"Numero",options:}]
    })
    console.log("ciao")
  }
}
