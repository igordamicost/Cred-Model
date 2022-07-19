import { Component, Inject,Injectable, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class DialogResultComponent implements OnInit {
  constructor(

    @Inject(MAT_DIALOG_DATA) public dados: any,
    private router: Router
  ) {}

  ngOnInit() {

  }
  confirmar() {
    this.router.navigate(['TelaFinalizada']);

  }
}
