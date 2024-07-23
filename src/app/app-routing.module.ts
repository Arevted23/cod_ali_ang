import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './index/components/header/header.component';
import { AboutusComponent } from './aboutof/components/aboutus/aboutus.component';
import { LocationComponent } from './location/components/location/location.component';
import { LogisticaComponent } from './tech/components/logistica/logistica.component';
import { SolutionsIndexComponent } from './solutions/components/solutions-index/solutions-index.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'aboutof', component: AboutusComponent },
  { path: 'solutions', component: SolutionsIndexComponent },
  { path: 'location', component: LocationComponent },
  { path: 'tech', component: LogisticaComponent },
  //- Ruta principal o default
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
