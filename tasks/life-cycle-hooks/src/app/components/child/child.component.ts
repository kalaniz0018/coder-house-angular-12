import { Component, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  counter = 0;
  interval: any;
  @Input() cambiarNombre = '';

  constructor() { }

  ngOnInit(): void {



    /*    this.interval = setInterval(() => {
         this.counter = this.counter + 1;
         console.log(this.counter);
       }, 1000); */

  }

 
  ngOnDestroy() {
    // clearInterval(this.interval);
    console.log("la funcion child onDestroy se esta llamando")
  }

  OnChanges() {
    console.log('OnChanges se esta llamando')
  }

}
