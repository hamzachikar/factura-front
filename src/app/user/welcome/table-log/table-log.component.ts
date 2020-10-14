import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivityLog } from 'src/app/models/activityLog.model';
import { LogUserService } from 'src/app/services/log-user-service.service';

@Component({
  selector: 'table-log',
  templateUrl: './table-log.component.html',
  styleUrls: ['./table-log.component.scss']
})
export class TableLogComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'user', 'action', 'detail'];
  dataSource = new MatTableDataSource<ActivityLog>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private logService:LogUserService){ }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.logService.activityLogs.subscribe(acts=>{
      if(acts){
        this.dataSource=new MatTableDataSource<ActivityLog>(acts);
      }

    })
  }

}
