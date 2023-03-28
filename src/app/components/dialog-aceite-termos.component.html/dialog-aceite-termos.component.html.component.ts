import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-aceite-termos.component.html',
  templateUrl: './dialog-aceite-termos.component.html.component.html',
  styleUrls: ['./dialog-aceite-termos.component.html.component.scss']
})
export class DialogAceiteTermos implements OnInit {
  result: boolean = false;
  static HtmlComponent: any;

  constructor() { }

  ngOnInit(): void {
  }
  aceiteTermos() {
    return this.result = true;
  }
}
