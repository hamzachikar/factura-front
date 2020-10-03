import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from '../models/client.model';
import {HTTP_START} from '../constants';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public clients=new BehaviorSubject<Client[]>([]);
  constructor(private http:HttpClient) {}
  public getClients(){
    this.http.get<Client[]>(HTTP_START+'user/getAllClients').subscribe(res=>{
      this.clients.next(res);
    });
  }
}
