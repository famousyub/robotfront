import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcutiontlistComponent } from './excutiontlist.component';

describe('ExcutiontlistComponent', () => {
  let component: ExcutiontlistComponent;
  let fixture: ComponentFixture<ExcutiontlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcutiontlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcutiontlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
