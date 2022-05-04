import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-standard',
  templateUrl: './input-standard.component.html',
  styleUrls: ['./input-standard.component.scss'],
})
export class InputStandardComponent implements OnInit {
  @Input() misura: string;
  @Input() valore: number;
  valoreConvertito: number;
  @Output() risultato = new EventEmitter<string>();

  constructor() { }
  convertitore(): void {
    if (this.misura === "C") {
      this.valoreConvertito = this.arrotonda(((9 / 5) * this.valore) + 32);

    }
    if (this.misura === "F") {
      this.valoreConvertito = this.arrotonda((this.valore - 32) * (5 / 9));
    }
    if (this.misura === "KM") {
      this.valoreConvertito = this.arrotonda(this.valore * 1.609);
    }
    if (this.misura === "MI") {
      this.valoreConvertito = this.arrotonda(this.valore / 1.609);
    }
    this.risultato.emit(this.misura + ":" + this.valoreConvertito);
  }
  arrotonda(risultato: number): number {
    return +risultato.toPrecision(3);
  }
  ngOnInit() { }
}
