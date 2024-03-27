import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CodigoredlogisticoComponent } from './components/codigoredlogistico/codigoredlogistico.component';
import { CovidComponent } from './components/covid/covid.component';
import { SpanNumbersComponent } from './components/span-numbers/span-numbers.component';





@NgModule({
  declarations: [HeaderComponent, CodigoredlogisticoComponent, CovidComponent, SpanNumbersComponent],
  imports: [CommonModule],
  exports:[HeaderComponent]
})
export class IndexModule { }
