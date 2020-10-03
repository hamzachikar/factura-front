import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthResponse } from '../models/authRes.model';
import { LoginAlertComponent } from './login-alert/login-alert.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  @Output() closeModal:EventEmitter<boolean>=new EventEmitter();
  isLoading=false;
  error:string=null;
  durationError = 5;
  constructor(private authService:AuthService,private route:Router,private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    
  }
  openAlertBar() {
    this._snackBar.openFromComponent(LoginAlertComponent, {
      duration: this.durationError * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
  onSubmit(form:NgForm){
    const email=form.value.email;
      const password=form.value.password;
    let authObs:Observable<AuthResponse>;
    if(form.valid){
      this.isLoading=true;
    authObs=this.authService.signIn(email,password)
    }
    else{
      return;
    }
    authObs.subscribe(resData=>{
      console.log(resData);
      this.isLoading=false;
      this.route.navigate(['/home']);
      form.reset();
      this.closeModal.emit(true);
    },error=>{
      this.isLoading=false
      this.openAlertBar();
    })
  }
 
}
