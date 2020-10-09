import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/models/authRes.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  signupForm:FormGroup
  user:AuthResponse=new AuthResponse();
  auth:boolean=false;
  seletedFile:File;
  selectedImg:any;
  constructor(private authService:AuthService,private userService:UserService,private sanitizer:DomSanitizer) {
    this.authService.user.subscribe(user=>{
      if(user){
        this.user=user;
        this.auth=true;
        this.signupForm=new FormGroup({
          'userData':new FormGroup({
            'email':new FormControl(this.user.user.email,[Validators.required]),
            'name':new FormControl(this.user.user.name,[Validators.required]),
            'phone':new FormControl(this.user.user.phone,[Validators.required]),
            'role':new FormControl(this.user.user.role,[Validators.required]),
            'id':new FormControl(this.user.user.id,[Validators.required]),
            'cin':new FormControl(this.user.user.cin,[Validators.required]),
            'specialty':new FormControl(this.user.user.specialty,[Validators.required]),
            'password':new FormControl(this.user.user.password,[Validators.required]),
            'active':new FormControl(this.user.user.active,[Validators.required])
          })
        });
      }
      else{
        this.auth=false;
      }
    }
    );
  }

  ngOnInit(): void {
    
  }
  onSubmit(){
    if(this.signupForm.valid){
      let user=new User(
        this.signupForm.get('userData').get('id').value,
        this.signupForm.get('userData').get('email').value,
        this.signupForm.get('userData').get('name').value,
        this.signupForm.get('userData').get('phone').value,
        this.signupForm.get('userData').get('role').value,
        this.signupForm.get('userData').get('cin').value,
        this.signupForm.get('userData').get('password').value,
        this.signupForm.get('userData').get('specialty').value,
        this.signupForm.get('userData').get('active').value,
        null,
        this.user.user.adminUser
      );
     this.userService.saveProfile(user,this.seletedFile).subscribe(
       res=>{
        this.user.user=res;
        this.authService.user.next(this.user);
       }
     )
    } 
  }
  public onFileChanged(event) {
    let selectedFile:File = event.target.files[0];
    let reader = new FileReader();
    if (selectedFile) {
      this.seletedFile=selectedFile;
      reader.readAsDataURL(selectedFile); 
      reader.onload = (_event) => { 
      this.selectedImg= reader.result; 
      }
     }  
  }
  transform(res:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl( 'data:image/png;base64,'+res);
}
}
