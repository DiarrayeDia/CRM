import { StateClient, StateOrder } from "../enums/state-order";

export interface OrderI {
  // Liste de toutes les props
  tjmHt : number;
  nbJours : number;
  tva : number;
  state : StateOrder;
  typePresta : string;
  client : string;
  comment : string;
  id : number; // généré par json-server
}
// Rôle interface : définir des types pour chaque propriété

export interface ClientI {
  state: StateClient;
  tva : number;
  id : number;
  name : string;
  totalCaHt: number;
  comment : string;
}