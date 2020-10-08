import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-gest',
  templateUrl: './user-gest.component.html',
  styleUrls: ['./user-gest.component.scss']
})
export class UserGestComponent implements OnInit,AfterContentInit {
  users:User[]=[];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','cin','specialty','status','role','action'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService:UserService) {
    this.userService.users.subscribe(users=>{
      this.users=users;
      this.dataSource=new MatTableDataSource<User>(this.users);
    })
  }
  ngAfterContentInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}
