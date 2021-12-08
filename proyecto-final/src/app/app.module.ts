import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'material/material.module';
import { LoginComponent } from './layout/components/login/login.component';
import { RegistroComponent } from './layout/components/registro/registro.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { HomeComponent } from './layout/components/home/home.component';
import { MainPageComponent } from './places/pages/main-page/main-page.component';
import { ListMovieComponent } from './places/components/list-movie/list-movie.component';
import { InformationMovieComponent } from './places/components/information-movie/information-movie.component';
import { ShoppingCartComponent } from './places/components/shopping-cart/shopping-cart.component';
import { DialogElementRegisterComponent } from './places/components/dialog-element-register/dialog-element-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    HomeComponent,
    MainPageComponent,
    ListMovieComponent,
    InformationMovieComponent,
    ShoppingCartComponent,
    DialogElementRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
