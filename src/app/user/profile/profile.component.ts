import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/models/authRes.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:AuthResponse=null;
  constructor(private authService:AuthService) {
    this.authService.user.subscribe(user=>this.user=user);
  }

  ngOnInit(): void {
    
  }

}
