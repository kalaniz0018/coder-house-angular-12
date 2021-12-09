import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/components/home/home.component';
import { LoginComponent } from './layout/components/login/login.component';
import { RegistroComponent } from './layout/components/registro/registro.component';
import { ShoppingCartSummaryComponent } from './places/components/shopping-cart-summary/shopping-cart-summary.component';
ShoppingCartSummaryComponent
const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'summary', component: ShoppingCartSummaryComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
