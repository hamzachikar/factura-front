import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HTTP_START } from '../constants';
import { Devis } from '../models/devis.model';

@Injectable({
  providedIn: 'root'
})
export class DevisService {
  public devis=new BehaviorSubject<Devis[]>([]);
  constructor(private http:HttpClient) { }
  public getDevis(){
    this.http.get<Devis[]>(HTTP_START+'user/getAllDevis').subscribe(
      res=>{
        this.devis.next(res);
      }
      )
  }
}
