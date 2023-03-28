import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAceiteTermos } from './dialog-aceite-termos.component.html.component';

describe('DialogAceiteTermos.Component.HtmlComponent', () => {
  let component: DialogAceiteTermos
  let fixture: ComponentFixture<DialogAceiteTermos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAceiteTermos ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAceiteTermos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
