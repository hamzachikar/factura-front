import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dash-card',
  templateUrl: './dash-card.component.html',
  styleUrls: ['./dash-card.component.scss']
})
export class DashCardComponent implements OnInit {
  @Input() icon:String;
  @Input() number:number;
  @Input() title:string;
  @Input() link:string;
  @Input() path:string;
  constructor() { }

  ngOnInit(): void {
  }

}
