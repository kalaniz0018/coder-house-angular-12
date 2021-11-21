import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { NuestrosProductosComponent } from './nuestros-productos/nuestros-productos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'nuestros-productos', component: NuestrosProductosComponent
  },
  {
    path: 'quienes-somos', component: QuienesSomosComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
