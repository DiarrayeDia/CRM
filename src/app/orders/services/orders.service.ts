import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { StateOrder } from 'src/app/core/enums/state-order';
// décorateur
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private collection$!: Observable<Order[]>;
  constructor(private http: HttpClient) {
    //On déclenche le setter
    this.collection = this.http.get<Order[]>(`http://localhost:3000/orders`);
  }

  //getter
  public get collection() : Observable<Order[]>{
    //on recupère la proprité privée
    return this.collection$;
  }

  //setter
  public set collection(col: Observable<Order[]>){
    //On attribue une valeur à une propiété privée
    this.collection$ = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    // créer nouvel objet
    console.log();
    
    const obj = new Order(item);
    // changer l'état
    obj.state = state;
    // déclencher update(obj)
    return this.update(obj);
    
  }

  // update this.http.put('url'/obj.id, obj)
  public update(obj: Order) : Observable<Order> {
    return this.http.put<Order>(`http://localhost:3000/orders/${obj.id}`, obj);
  }

}
