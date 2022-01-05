import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingMovieComponent } from './components/adding-movie/adding-movie.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
ShoppingCartSummaryComponent
const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'summary', component: ShoppingCartSummaryComponent },
  { path: 'add-movie', component: AddingMovieComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
