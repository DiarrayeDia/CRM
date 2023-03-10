import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titleParent: string = "Listes des commandes";

  // déclarer une propriété et stocker enum
  public states= Object.values(StateOrder);

  // Propriété pour stocker data
  public collection!: Order[];
  // En tête du tableau
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  //déclencher la prop collection + afficher data dans console.log
  constructor(private orderService : OrdersService) {
    this.orderService.collection.subscribe((data) => {
      //console.log(data);
      this.collection = data;
      //console.log(this.collection);
    })
   }

  ngOnInit(): void {}

  public total(val: number, coef:  number, tva?: number) : number{
    if(tva) {
      return val *coef * (1 + tva /100);
    }
    return val * coef;
  }

  public changeState(item: Order, event: Event) {
    //console.log(event, 'event');
    const target = event.target as HTMLSelectElement;
    // console.log(target);
    const state = target.value as StateOrder; // confirmed ou option, cancelled
    console.log(state);

    this.ordersService.changeState(item, state).subscribe((data) => {
      console.log(data);
      // item prend la référence de data => problème
      // item = data;
      // ?? solution ??
      // item garde sa référence
      Object.assign(item, data);
    });

    // appel .subscribe()
  }

}
