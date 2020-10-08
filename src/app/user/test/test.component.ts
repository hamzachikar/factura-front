import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  user:User=null;
  picByte:any;
  constructor(private http:HttpClient,private authService:AuthService) {
    this.authService.user.subscribe(user=>this.user=user.user);
   }

  ngOnInit(): void {
  }
 
}
