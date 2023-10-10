import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListplanificationComponent } from './listplanification.component';

describe('ListplanificationComponent', () => {
  let component: ListplanificationComponent;
  let fixture: ComponentFixture<ListplanificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListplanificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListplanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
