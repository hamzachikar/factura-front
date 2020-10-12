import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCardProfitBarComponent } from './dash-card-profit-bar.component';

describe('DashCardProfitBarComponent', () => {
  let component: DashCardProfitBarComponent;
  let fixture: ComponentFixture<DashCardProfitBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCardProfitBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCardProfitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
