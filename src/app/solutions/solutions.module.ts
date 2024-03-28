import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { AlmsolutionsComponent } from './components/almsolutions/almsolutions.component';
import { DistsolutionsComponent } from './components/distsolutions/distsolutions.component';
import { LogissolutionsComponent } from './components/logissolutions/logissolutions.component';

@NgModule({
  declarations: [
    PageComponent,
    AlmsolutionsComponent,
    DistsolutionsComponent,
    LogissolutionsComponent,
  ],
  imports: [CommonModule],
  exports: [PageComponent],
})
export class SolutionsModule {}
