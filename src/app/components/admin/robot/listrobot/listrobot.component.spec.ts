import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrobotComponent } from './listrobot.component';

describe('ListrobotComponent', () => {
  let component: ListrobotComponent;
  let fixture: ComponentFixture<ListrobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
