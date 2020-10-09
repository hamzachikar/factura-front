import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthResponse } from '../models/authRes.model';

@Component({
  selector: 'navBar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() scroll:EventEmitter<boolean>=new EventEmitter();
  user:AuthResponse=null;
  userAvatar:any;
  constructor() { }

  ngOnInit(): void {
  }
  scrollDown(){
    this.scroll.emit();
  }

}
