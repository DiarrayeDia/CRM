import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private collection$!: Observable<Client[]>;
  constructor(private http: HttpClient) {
    //On déclenche le setter
    this.collection = this.http.get<Client[]>('http://localhost:4201/clients');
  }

  //getter
  public get collection() : Observable<Client[]>{
    //on recupère la proprité privée
    return this.collection$;
  }

  //setter
  public set collection(col: Observable<Client[]>){
    //On attribue une valeur à une propiété privée
    this.collection$ = col;
  }
}
