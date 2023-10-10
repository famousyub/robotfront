import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateexcutionComponent } from './createexcution.component';

describe('CreateexcutionComponent', () => {
  let component: CreateexcutionComponent;
  let fixture: ComponentFixture<CreateexcutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateexcutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateexcutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
