import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DirectivaDirective } from './directive/directiva.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'clase-seis-formularios';

  @ViewChild ("someInput") someInput!:ElementRef;
  ngAfterViewInit(){
    
  }


  /* @ViewChild ("someInput") someInput!:ElementRef;
  ngAfterViewInit(){
    this.someInput.nativeElement.value  = "Mono";
  } */
  /* extraCreature!: string


  @ViewChild (DirectivaDirective)
  set appShark(directive: DirectivaDirective){
    this.extraCreature = directive.creature;
  };

  ngAfterViewInit() {
    console.log(this.extraCreature);
  } */


}


/* import {Component, ViewChild} from '@angular/core';
import {SharkDirective} from "./directive/shark.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  extraCreature!: string;

  @ViewChild (SharkDirective)
  set appShark(directive: SharkDirective){
    this.extraCreature = directive.creature;
  };

  ngAfterViewInit() {
    console.log(this.extraCreature);
  }
} */