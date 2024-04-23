import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CodigoAlimentario';
  public active: boolean = false;
  setActive(): void {
    this.active = !this.active;
  }
}
