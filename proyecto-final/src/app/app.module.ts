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
import { DialogElementRegisterComponent } from './places/components/dialog-element-register/dialog-element-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layout/components/footer/footer.component';
import { ShoppingCartComponent } from './layout/components/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './places/components/shopping-cart-summary/shopping-cart-summary.component';
import { DialogElementPaymentComponent } from './places/components/dialog-element-payment/dialog-element-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { AddingMovieComponent } from './layout/components/adding-movie/adding-movie.component';

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
    DialogElementRegisterComponent,
    FooterComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    DialogElementPaymentComponent,
    AddingMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
