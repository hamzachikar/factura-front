import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  constructor() { }

  ngOnInit(): void {
  }

}
