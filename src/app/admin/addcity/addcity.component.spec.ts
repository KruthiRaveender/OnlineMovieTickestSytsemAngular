import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcityComponent } from './addcity.component';

describe('AddcityComponent', () => {
  let component: AddcityComponent;
  let fixture: ComponentFixture<AddcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
