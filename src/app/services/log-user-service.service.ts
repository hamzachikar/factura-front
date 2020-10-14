import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HTTP_START} from '../constants';
import { ActivityLog } from '../models/activityLog.model';
@Injectable({
  providedIn: 'root'
})
export class LogUserService {
  activityLogs=new BehaviorSubject<ActivityLog[]>([]);
  constructor(private http:HttpClient) {}
  public getLogsUsers(){
    this.http.get<ActivityLog[]>(HTTP_START+'admin/logs').subscribe(res=>{
      if(res){
        console.log(res)
        this.activityLogs.next(res);
      }
    })
  }
}
