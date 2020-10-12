import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCardProfitComponent } from './dash-card-profit.component';

describe('DashCardProfitComponent', () => {
  let component: DashCardProfitComponent;
  let fixture: ComponentFixture<DashCardProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCardProfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCardProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
