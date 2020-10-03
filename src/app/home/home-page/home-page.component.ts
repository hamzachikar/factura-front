import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    window.scrollTo(0, 0);
  }
  
  ngOnInit(): void {
  }

}
