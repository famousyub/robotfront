import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexcutionComponent } from './listexcution.component';

describe('ListexcutionComponent', () => {
  let component: ListexcutionComponent;
  let fixture: ComponentFixture<ListexcutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListexcutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListexcutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
