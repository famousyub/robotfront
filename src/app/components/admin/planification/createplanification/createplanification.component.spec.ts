import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateplanificationComponent } from './createplanification.component';

describe('CreateplanificationComponent', () => {
  let component: CreateplanificationComponent;
  let fixture: ComponentFixture<CreateplanificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateplanificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateplanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
