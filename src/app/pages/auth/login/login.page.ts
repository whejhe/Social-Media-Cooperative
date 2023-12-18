import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
logout() {
  localStorage.removeItem('sesion');
  this.navCrtl.navigateRoot('/login');
  console.log(localStorage);
}

  formularioLogin: FormGroup;
  errorMessage!: string;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCrtl: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    
  }

  async login() {
    
    const f = this.formularioLogin.value;
    const usuarioString = localStorage.getItem("usuario");

    if(usuarioString !==null){
      let usuario = JSON.parse(usuarioString);
      if (usuario.nombre === f.usuario && usuario?.password === f.password) {
        localStorage.setItem('sesion', 'true');
        this.navCrtl.navigateRoot('/home');
        console.log(localStorage);
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales incorrectas',
          buttons: ['OK']
        });
        await alert.present();
      }
    }else{
      console.log('No hay usuario');
    }
    
  } 

}
