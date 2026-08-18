import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Operacion {
  numero1: number;
  numero2: number;
  operacion: string;
  resultado: number;
}

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {

  numero1: number = 0;
  numero2: number = 0;
  operacion: string = '+';
  resultado: number = 0;

  historial: Operacion[] = [];

  calcular() {

    switch (this.operacion) {

      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;

      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;

      case 'x':
        this.resultado = this.numero1 * this.numero2;
        break;

      case '%':
        this.resultado = this.numero1 % this.numero2;
        break;
    }


    this.historial.push({
      numero1: this.numero1,
      numero2: this.numero2,
      operacion: this.operacion,
      resultado: this.resultado
    });
  }

  borrarHistorial() {
    this.historial = [];
  }
}