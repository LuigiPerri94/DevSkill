import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  c: number;
  f: number;
  km: number;
  mi: number;


  conversione(messaggio:string) {
    let valore = 0;
    let misura: string;
    const messaggioFinale = messaggio.split(":");

    misura = messaggioFinale[0];
    valore = +messaggioFinale[1];

    if (misura === "KM") {
      this.mi = valore;
    }    
    if (misura === "MI") {
      this.km = valore;
    }    
    if (misura === "C") {
      this.f = valore;
    }    
    if (misura === "F") {
      this.c = valore;
    }
  }
  constructor() { }



}
