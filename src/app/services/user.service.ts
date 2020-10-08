import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HTTP_START} from '../constants';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users=new BehaviorSubject<User[]>([]);
  constructor(private http:HttpClient) {}
  public getUsers(){
    this.http.get<User[]>(HTTP_START+'admin/getAllUsers').subscribe(res=>{
      this.users.next(res);
    });
  }
  public saveProfile(user:User,selectedFile:File){
    let formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('user',  JSON.stringify(user))
    return this.http.post<User>(HTTP_START+'user/profile',formData);
  }
}
