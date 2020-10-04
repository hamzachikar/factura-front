import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/models/authRes.model';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  signupForm:FormGroup
  user:AuthResponse=null;
  constructor(private authService:AuthService) {
    this.authService.user.subscribe(user=>this.user=user);
  }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'userData':new FormGroup({
        'email':new FormControl(this.user.user.email,[Validators.required]),
        'name':new FormControl(this.user.user.name,[Validators.required]),
        'phone':new FormControl(this.user.user.phone,[Validators.required]),
        'role':new FormControl(this.user.user.role,[Validators.required]),
        'id':new FormControl(this.user.user.id,[Validators.required]),
        'cin':new FormControl(this.user.user.cin,[Validators.required]),
        'specialty':new FormControl(this.user.user.specialty,[Validators.required]),
        'avatar':new FormControl(this.user.user.avatar,[Validators.required]),
        'password':new FormControl(this.user.user.password,[Validators.required])
      })
    });
  }
  onSubmit(){
    console.log(this.signupForm)
  }
}
