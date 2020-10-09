import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError, BehaviorSubject} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthResponse } from '../models/authRes.model';
import {HTTP_START} from '../constants';
import { ClientService } from '../services/client.service';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { DevisService } from '../services/devis.service';

@Injectable({providedIn:'root'})
export class AuthService{
    user=new BehaviorSubject<AuthResponse>(null);
    public error=new BehaviorSubject<string>(null);
    private tokenExpirationTimer:any;
    constructor(
        private http:HttpClient,
        private router:Router,
        private clientService:ClientService,
        private userService:UserService,
        private productService:ProductService,
        private devisService:DevisService
        ){}
    private loadAuthUserData(){
        this.userService.getUsers();
        this.clientService.getClients();
        this.productService.getProducts();
        this.devisService.getDevis()
    }
    logout(){
        this.user.next(null);
        localStorage.removeItem('userData'),
        this.router.navigate(['/']);
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer=null;
    }
    autoLogout(expirationDuration:number){
        console.log(expirationDuration);
        this.tokenExpirationTimer=setTimeout(()=>{
            this.logout();
        },expirationDuration)
    }
 
    signIn(email:string,password:string){
       
        return this.http.post<AuthResponse>(HTTP_START+'auth',"",{
            params:{
                email:email,
                password:password
            }
        }).pipe(catchError(err=>this.handelError(err)),tap(resData=>{
            this.handleAuth(
                resData
             )
         }))
    }
    private handleAuth(res:AuthResponse){
        this.user.next(res);
        this.autoLogout(this.getDurationAuth(new Date(this.user.getValue().expirationDate)));
        localStorage.setItem('userData',JSON.stringify(res));
        this.loadAuthUserData();
    }
   
    autoLogin(){
       const userData:AuthResponse= JSON.parse(localStorage.getItem('userData'));
       if(!userData){
           return;
       }
       const loadedUser=userData;
       if(loadedUser.jwt){
          this.user.next(loadedUser);
            this.autoLogout(this.getDurationAuth(new Date(this.user.getValue().expirationDate)));
            this.loadAuthUserData();
       }
    }
    private handelError(errorRes:HttpErrorResponse){
        let error='An unknow error';
        console.log(errorRes.error.message);
        if(errorRes.error.message){
            error=errorRes.error.message;
        }
        this.error.next(error);
        return throwError(error);
    }
    private getDurationAuth(expiration:Date){
        let date=new Date();
        return  Math.floor(
            (
                Date.UTC(
                    expiration.getFullYear(),
                    expiration.getMonth(), 
                    expiration.getDate(),
                    expiration.getHours(),
                    expiration.getMinutes(),
                    expiration.getSeconds(),
                    expiration.getMilliseconds()
                    )-
                    Date.UTC(
                        date.getFullYear(), 
                        date.getMonth(), 
                        date.getDate(),
                        date.getHours(),
                        date.getMinutes(),
                        date.getSeconds(),
                        date.getMilliseconds()
                        )                     
            ));
    }
}