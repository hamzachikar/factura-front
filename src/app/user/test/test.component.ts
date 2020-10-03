import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';
import { HTTP_START } from 'src/app/constants';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  user:User=null;
  picByte:any;
  constructor(private http:HttpClient,private authService:AuthService,private sanitizer:DomSanitizer) {
    this.authService.user.subscribe(user=>this.user=user.user);
   }

  ngOnInit(): void {
  }
  public onFileChanged(event) {
    let selectedFile:File = event.target.files[0];
    if (selectedFile) {
      let formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('user',  JSON.stringify(this.user))
      this.http.post<User>(HTTP_START+'user/profile',formData).subscribe(res=>{
        this.picByte=this.transform(res.avatar)
        console.log(this.picByte);
      }
      );
     }  
  }
  transform(res:any){
      return this.sanitizer.bypassSecurityTrustResourceUrl( 'data:image/png;base64,'+res);
  }
}
