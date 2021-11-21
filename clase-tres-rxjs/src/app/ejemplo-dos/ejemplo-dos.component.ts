import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

//usan el scan y subscribe para la contabilizacion 

//el primero se liga al documento un evento click 
fromEvent(document, 'click')
  //en el pipe la funcion scan recibe un parametro un count y lo devuelvo aumanetado uno cuando sucede el evento 
  .pipe(scan(count => count + 1, 0))
  //subscribe recibe count y lo muestra en consola 
  .subscribe(count => console.log(`Clicked ${count} times with rxjs`));


@Component({
  selector: 'app-ejemplo-dos',
  templateUrl: './ejemplo-dos.component.html',
  styleUrls: ['./ejemplo-dos.component.css']
})
export class EjemploDosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }






}
