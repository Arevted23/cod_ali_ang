import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './index/components/header/header.component';
import { AboutusComponent } from './aboutof/components/aboutus/aboutus.component';
import { LocationComponent } from './location/components/location/location.component';
import { LogisticaComponent } from './tech/components/logistica/logistica.component';
import { PageComponent } from './solutions/components/page/page.component';

const routes: Routes = [
  {path: 'home', component: HeaderComponent},
  {path: 'aboutof', component: AboutusComponent },
  {path: 'solutions', component: PageComponent },
  {path: 'location', component: LocationComponent },
  {path: 'tech', component: LogisticaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
