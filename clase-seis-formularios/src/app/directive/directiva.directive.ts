import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {

  creature = "Dolphin"

  //designamos un elemento que va a ser nuestro elemento de referencia y un render 
  constructor(elem: ElementRef, renderer: Renderer2) { 

    let shark = renderer.createText("Tiburon")
    renderer.appendChild(elem.nativeElement, shark)
  }

}
