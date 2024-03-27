import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlmacenajeComponent } from './components/almacenaje/almacenaje.component';
import { DistribucionComponent } from './components/distribucion/distribucion.component';
import { LogisticaInterComponent } from './components/logistica-inter/logistica-inter.component';
import { PageComponent } from './components/page/page.component';



@NgModule({
  declarations: [
    AlmacenajeComponent,
    DistribucionComponent,
    LogisticaInterComponent,
    PageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SolutionsModule { }
