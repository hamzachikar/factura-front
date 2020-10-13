import { Component, OnDestroy, OnInit } from '@angular/core';
import {MISSIONS,SERVICES} from '../../constants';
@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit,OnDestroy {
  services=SERVICES;
  missions=MISSIONS;
  constructor() { }
  ngOnDestroy(): void {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
  }
  
}
