import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmacenajeComponent } from './components/almacenaje/almacenaje.component';
import { LogisticaComponent } from './components/logistica/logistica.component';



@NgModule({
  declarations: [
    AlmacenajeComponent,
    LogisticaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TechModule { }
