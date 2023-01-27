import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  // créer une propriété booléenne
  public open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  // selectionne le btn
  //ajouter un addEventListner
  public toggle(){
    //alterner la classe
    this.open = !this.open;

  }

}
