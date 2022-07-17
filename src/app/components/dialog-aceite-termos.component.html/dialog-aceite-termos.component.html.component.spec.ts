import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAceiteTermos.Component.HtmlComponent } from './dialog-aceite-termos.component.html.component';

describe('DialogAceiteTermos.Component.HtmlComponent', () => {
  let component: DialogAceiteTermos.Component.HtmlComponent;
  let fixture: ComponentFixture<DialogAceiteTermos.Component.HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAceiteTermos.Component.HtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAceiteTermos.Component.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
