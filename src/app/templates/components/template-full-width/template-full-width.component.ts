import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  // Créer une propriété qui sera alimenter par l'exterieur (ici parent : Orders page list orders) @Input()
  @Input() title !: string;


  constructor() {
    //console.log(this.title, 'constructor'); //undefined : car le constrcteur est déclencher au moment du app-template-full-width
  }

  // lifecycle hook : on a récuperer la bonne valeur car cette etapes du lifecycle vient apres app-template-full-width
  ngOnInit(): void {
    //console.log(this.title); //liste des commandes
  }

  ngOnChanges(arg: SimpleChanges){
    //console.log(arg, 'ngOnChanges'); // On recupere la valeur avant ngOnInit() et si ajoute l'arg on obtient un tableau avec  l'ancienne et la nouvelle valeur
  }

  // se déclenche quand le composant est détruit (ex: quand on change de route).
  ngOnDestroy(){
    //l'interet de ce hook est de garder en mémoire des infos
    //console.log('détruit')
  }

}
