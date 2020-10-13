import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.model';
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
  user:User=null;
dashCardData=[
    {title:"products",number:0,icon:"fa fa-2x fa-shopping-cart",link:"view all products",path:"#"},
    {title:"users",number:0,icon:"fa fa-2x fa-users",link:"view all users",path:"#"},
    {title:"devis",number:0,icon:"fa fa-2x fa-inbox",link:"view all devis",path:"#"},
    {title:"clients",number:0,icon:"fa fa-2x fa-address-book-o",link:"view all clients",path:"#"}
  ]
dashCardStOption=["earn","client",""];
  
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
      this.user=user.user;
    });
    this.userService.users.subscribe(res=>{
      this.dashCardData[1].number=res.length;
    });
    this.clientService.clients.subscribe(
      res=>{
        this.dashCardData[3].number=res.length;
      }
    );
    this.productService.products.subscribe(
      res=>{
        this.dashCardData[0].number=res.length;
      }
    );
    this.devisService.devis.subscribe(
      res=>{
        this.dashCardData[2].number=res.length;
      }
    )

  }

}
