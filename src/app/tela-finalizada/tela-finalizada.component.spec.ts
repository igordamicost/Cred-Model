import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFinalizadaComponent } from './tela-finalizada.component';

describe('TelaFinalizadaComponent', () => {
  let component: TelaFinalizadaComponent;
  let fixture: ComponentFixture<TelaFinalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFinalizadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
