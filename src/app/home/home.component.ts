import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  @ViewChild('body') private myScrollContainer: ElementRef;
  constructor( private wowService: NgwWowService) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.wowService.init();
  }
 
  scrollDown(){
    window.scrollTo(0,this.myScrollContainer.nativeElement.scrollHeight );
  }
  onScrollTop(){
    window.scrollTo(0, 0);
  }
 
}
