import { Component } from '@angular/core';
import { Calculadora } from './calculadora/calculadora';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}