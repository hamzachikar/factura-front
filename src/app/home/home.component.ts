import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  @ViewChild('body') private myScrollContainer: ElementRef;
  constructor() { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    AOS.init();
  }
 
  scrollDown(){
    window.scrollTo(0,this.myScrollContainer.nativeElement.scrollHeight );
  }
  onScrollTop(){
    window.scrollTo(0, 0);
  }
 
}
