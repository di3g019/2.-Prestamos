import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule] // Asegúrate de que CommonModule esté incluido aquí
})
export class AppComponent {
  monto: number = 0;
  cuotas: number | null = null;
  valorCuota: number | null = null;

  onMontoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.monto = parseFloat(input.value);
  }

  calcularPrestamo() {
    let interes: number;
    let montoConInteres: number;

    // Determinar el interés
    if (this.monto < 4000) {
      interes = 0.12;
    } else {
      interes = 0.10;
    }

    // Calcular el monto con interés
    montoConInteres = this.monto * (1 + interes);

    // Determinar el número de cuotas
    if (this.monto > 5000) {
      this.cuotas = 3;
    } else if (this.monto < 1000) {
      this.cuotas = 1;
    } else if (this.monto >= 2000 && this.monto <= 3000) {
      this.cuotas = 2;
    } else {
      this.cuotas = 5;
    }

    // Calcular el valor de cada cuota
    this.valorCuota = montoConInteres / this.cuotas;
  }
}
