import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'material/material.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { InformationMovieComponent } from './components/information-movie/information-movie.component';
import { DialogElementRegisterComponent } from './components/dialog-element-register/dialog-element-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { DialogElementPaymentComponent } from './components/dialog-element-payment/dialog-element-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { AddingMovieComponent } from './components/adding-movie/adding-movie.component';

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
