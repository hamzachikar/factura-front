import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthIntercpetorService implements HttpInterceptor{
    constructor(private authService:AuthService){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user=>{
                if(!user){
                    return next.handle(req);
                }
                const modifReq=req.clone(({
                    setHeaders: {
                        Authorization: `Bearer ${user.jwt}`
                    }
                
                }))
                return next.handle(modifReq);
            }))
        
    }
}