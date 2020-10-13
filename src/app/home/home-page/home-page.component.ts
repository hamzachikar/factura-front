import { Component, OnDestroy, OnInit } from '@angular/core';
import {SERVICES} from '../../constants';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit,OnDestroy {
  services=SERVICES;
  constructor() { }
  ngOnDestroy(): void {
    window.scrollTo(0, 0);
  }
  
  ngOnInit(): void {
  }

}
