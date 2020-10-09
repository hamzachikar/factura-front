import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/models/authRes.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
  user:User=null;
  constructor(private authService:AuthService,private sanitizer:DomSanitizer) {
    this.authService.user.subscribe(user=>{
      if(user){
        this.user=user.user;
      }
    });
   }

  ngOnInit(): void {
  }
  logout(){
    console.log('logOut')
    this.authService.logout();
  }
  transform(res:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl( 'data:image/png;base64,'+res);
}
  splitName(name:string){
    return name.split(' ',1)[0];
  }
}
