import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsdetailsComponent } from './robotsdetails.component';

describe('RobotsdetailsComponent', () => {
  let component: RobotsdetailsComponent;
  let fixture: ComponentFixture<RobotsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
