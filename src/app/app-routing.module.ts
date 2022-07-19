import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TelaFinalizadaComponent} from '../app/tela-finalizada/tela-finalizada.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'TelaFinalizada', component: TelaFinalizadaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
