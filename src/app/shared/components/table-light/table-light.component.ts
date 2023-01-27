import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() collection !: Order[];
  @Input() headers!: string[];

  constructor() {
    //console.log(this.collection, "constructor"); // retourne undifined
  }

  ngOnInit(): void {
    //console.log(this.collection, "ngOnInit"); // undefined aussi ssi on pass par *ngIf="collection"

  }

}
