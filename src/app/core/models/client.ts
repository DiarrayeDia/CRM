import { StateClient } from "../enums/state-order";
import { ClientI } from "../interfaces/order-i";

export class Client implements ClientI{
  state= StateClient.ACTIVE;
  tva = 20;
  id!: number;
  name!: string;
  totalCaHt = 120000;
  comment!: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj)
    }
  }
}
