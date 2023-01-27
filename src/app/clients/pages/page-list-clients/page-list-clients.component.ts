import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection!: Client[];

  constructor(private clientService : ClientsService) { 
    this.clientService.collection.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
