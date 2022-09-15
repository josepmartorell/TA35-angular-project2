import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cronomentro';
  message = '';

  actualizar(t: any) {
    this.message = t + 'se actualiza cada 10 segundos';
  }
}
