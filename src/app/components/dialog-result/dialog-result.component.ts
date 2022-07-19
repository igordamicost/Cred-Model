import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.scss'],
})
export class DialogResultComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dados: any,
    private router: Router
  ) {}

  ngOnInit() {}
  confirmar() {
    debugger
    this.router.navigate(['TelaFinalizada'],{queryParams: this.dados});
  }
}
