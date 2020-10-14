import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLogComponent } from './table-log.component';

describe('TableLogComponent', () => {
  let component: TableLogComponent;
  let fixture: ComponentFixture<TableLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
