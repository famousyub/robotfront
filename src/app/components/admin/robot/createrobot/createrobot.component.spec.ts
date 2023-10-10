import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterobotComponent } from './createrobot.component';

describe('CreaterobotComponent', () => {
  let component: CreaterobotComponent;
  let fixture: ComponentFixture<CreaterobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
