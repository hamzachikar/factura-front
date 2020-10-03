import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as AOS from 'aos';
import { AuthResponse } from '../models/authRes.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  @ViewChild('body') private myScrollContainer: ElementRef;
  user:AuthResponse=null;
  constructor(private authService:AuthService) { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    AOS.init();
    this.authService.user.subscribe(
      user=>this.user=user
    )
  }
 
  scrollDown(){
    window.scrollTo(0,this.myScrollContainer.nativeElement.scrollHeight );
  }
  onScrollTop(){
    window.scrollTo(0, 0);
  }
 
}
