import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
  }

}
