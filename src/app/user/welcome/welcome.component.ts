import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthResponse } from 'src/app/models/authRes.model';
import { ClientService } from 'src/app/services/client.service';
import { DevisService } from 'src/app/services/devis.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  user:AuthResponse=null;
  nbrUser:number=0;
  nbrClient:number=0;
  nbrProducts:number=0;
  nbrDevis:number=0;
  constructor(
    private authService:AuthService,
    private userService:UserService,
    private clientService:ClientService,
    private productService:ProductService,
    private devisService:DevisService
    ) { 
     
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user=>{
      this.user=user;
    });
    this.userService.users.subscribe(res=>{
      this.nbrUser=res.length;
    });
    this.clientService.clients.subscribe(
      res=>{
        this.nbrClient=res.length;
      }
    );
    this.productService.products.subscribe(
      res=>{
        this.nbrProducts=res.length;
      }
    );
    this.devisService.devis.subscribe(
      res=>{
        this.nbrDevis=res.length;
      }
    )

  }

}
