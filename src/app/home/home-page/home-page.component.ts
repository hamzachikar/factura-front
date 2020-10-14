import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import {SERVICES} from '../../constants';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit,OnDestroy {
  services=SERVICES;
  constructor(private authService:AuthService,private router:Router) { }
  ngOnDestroy(): void {
    window.scrollTo(0, 0);
  }
  
  ngOnInit(): void {
    this.authService.user.subscribe(user=>{
      if(user){
        this.router.navigate(['/app/dash']);
      }
    })
  }

}
