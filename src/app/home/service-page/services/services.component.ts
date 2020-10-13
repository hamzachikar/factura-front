import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input() icon:string;
  @Input() title:string;
  @Input() content:string;
  constructor() { }

  ngOnInit(): void {
  }

}
