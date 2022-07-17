import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSimulateComponent } from './after-simulate.component';

describe('AfterSimulateComponent', () => {
  let component: AfterSimulateComponent;
  let fixture: ComponentFixture<AfterSimulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterSimulateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSimulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
