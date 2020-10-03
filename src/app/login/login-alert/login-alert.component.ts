import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-alert',
  templateUrl: './login-alert.component.html',
  styleUrls: ['./login-alert.component.scss']
})
export class LoginAlertComponent implements OnInit {
  error:string;
  constructor(private authService:AuthService) { 
    authService.error.subscribe(error=>{
      this.error=error;
    })
  }

  ngOnInit(): void {
  }

}
