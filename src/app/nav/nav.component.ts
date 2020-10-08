import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthResponse } from '../models/authRes.model';

@Component({
  selector: 'navBar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() scroll:EventEmitter<boolean>=new EventEmitter();
  user:AuthResponse=null;
  userAvatar:any;
  constructor(private authService:AuthService,private router:Router,private sanitizer:DomSanitizer) { 
    this.authService.user.subscribe(user=>{
      if(user){
        this.user=user;
      this.userAvatar=this.transform(this.user.user.avatar);
      }
    });
  }

  ngOnInit(): void {
  }
  scrollDown(){
    this.scroll.emit();
  }
  logout(){
    this.authService.logout();
  }
  checkRoute(){
    console.log(this.router.url);
  }
  transform(res:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl( 'data:image/png;base64,'+res);
}
}
