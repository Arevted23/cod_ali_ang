import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsIndexComponent } from './components/solutions-index/solutions-index.component';
import { SolutionsDistribucionComponent } from './components/solutions-distribucion/solutions-distribucion.component';
import { SolutionsAlmacenajeComponent } from './components/solutions-almacenaje/solutions-almacenaje.component';
import { SolutionsInternationalComponent } from './components/solutions-international/solutions-international.component';



@NgModule({
  declarations: [
    SolutionsIndexComponent,
    SolutionsDistribucionComponent,
    SolutionsAlmacenajeComponent,
    SolutionsInternationalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class SolutionsModule { }
