import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('loginModal') loginModal: ElementRef;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  closeModalLogin(){
    this.loginModal.nativeElement.click();
    this.router.navigate(["/app/dash"])
   }
}
