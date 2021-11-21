import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { count, filter } from 'rxjs/operators';


//first() el primero el pipe hace es la prmera accion como hace los lissener en js

//last() mencion al ultimom hay que importarlo 
//.pipe(findIndex( item => item == 2 )) ??


/*del medio
 .pipe(findIndex(v => v%4 === 0)
.subscribe((v) => console.log(`${v}`) */

of(1,2,3)
  .pipe(filter((x, index) => index === 1))
  .subscribe(x => console.log(`value : ${x}`))



of(1, 2, 3, 4, 5)
  .pipe()
  .subscribe((v) => console.log(`value: ${v}`));

/*   //va a salir naranza

let myArray = new IterableList("pera", "banana", "manzana", "naranja", "frutilla")

let iterator = myArray.iterator
 */


@Component({
  selector: 'app-ejemplo-tres',
  templateUrl: './ejemplo-tres.component.html',
  styleUrls: ['./ejemplo-tres.component.css']
})
export class EjemploTresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
