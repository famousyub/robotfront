import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexcutiontComponent } from './addexcutiont.component';

describe('AddexcutiontComponent', () => {
  let component: AddexcutiontComponent;
  let fixture: ComponentFixture<AddexcutiontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexcutiontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexcutiontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
