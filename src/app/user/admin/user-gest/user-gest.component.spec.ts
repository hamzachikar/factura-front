import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGestComponent } from './user-gest.component';

describe('UserGestComponent', () => {
  let component: UserGestComponent;
  let fixture: ComponentFixture<UserGestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
