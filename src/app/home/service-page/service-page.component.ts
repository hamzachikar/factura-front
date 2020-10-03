import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
  }
  
}
