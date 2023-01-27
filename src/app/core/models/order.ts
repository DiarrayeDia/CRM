import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI{
  //lister toutes les props avec des valeurs par défaut
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION ;
  typePresta!: string ;
  client!: string;
  comment!: string;
  id!: number;
  // ici le constructeur
  constructor(obj?: Partial<Order>){
    if (obj) {
      Object.assign(this, obj)
    }
  }
}
// new Order({nbJours:2})
