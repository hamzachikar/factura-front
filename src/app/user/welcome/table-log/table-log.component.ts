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
  displayedColumns: string[] = ['id', 'user','date','action', 'detail'];
  dataSource = new MatTableDataSource<ActivityLog>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private logService:LogUserService){ }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.logService.activityLogs.subscribe(acts=>{
      if(acts){
        this.dataSource=new MatTableDataSource<ActivityLog>(acts);
        this.dataSource.paginator = this.paginator;
      }

    })
  }
  getDate(date:any){
    let d =new Date(date);
    return d.getFullYear()+'/'+(d.getMonth()+1)+'/'+d.getDate()+' '+d.getHours()+':'+d.getUTCMinutes();
  }
}
