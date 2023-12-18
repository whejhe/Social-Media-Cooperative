import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-cooperativa',
  templateUrl: './cooperativa.page.html',
  styleUrls: ['./cooperativa.page.scss'],
})
export class CooperativaPage implements OnInit {

  constructor(public fb:FormBuilder,
    public alertController:AlertController,
    public navCrtl:NavController) {
      
     }

  ngOnInit() {
  }

}
