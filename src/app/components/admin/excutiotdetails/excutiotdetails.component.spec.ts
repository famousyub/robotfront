import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcutiotdetailsComponent } from './excutiotdetails.component';

describe('ExcutiotdetailsComponent', () => {
  let component: ExcutiotdetailsComponent;
  let fixture: ComponentFixture<ExcutiotdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcutiotdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcutiotdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
