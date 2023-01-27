import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective {
  @Input() etat!: string;

  constructor() {
    console.log('depuis directive appstate');
  }

  // déclenchée une seule fois
  ngOnInit(){
    // console.log(this.etat); // ???
  }

  ngOnChanges(){
    console.log(this.etat); // ???
    // cibler l'attribut class
    // donner une valeur à la classe

  }
}
  



