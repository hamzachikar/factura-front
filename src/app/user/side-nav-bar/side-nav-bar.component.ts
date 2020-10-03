import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/models/authRes.model';

@Component({
  selector: 'side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  user:AuthResponse=null;
  constructor(private authService:AuthService) {
    this.authService.user.subscribe(
      user=>this.user=user
    )
   }

  ngOnInit(): void {
  }

}
