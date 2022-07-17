import { Component, OnInit } from '@angular/core';
import { Simulacao } from 'src/app/interfaces/simulacao.interface';
import {MatDialog} from '@angular/material/dialog';
import { DialogAceiteTermos } from '../dialog-aceite-termos.component.html/dialog-aceite-termos.component.html.component';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

@Component({
  selector: 'app-after-simulate',
  templateUrl: './after-simulate.component.html',
  styleUrls: ['./after-simulate.component.scss']
})
export class AfterSimulateComponent implements OnInit {
  disabled = true;
  checked = false;
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Simulacao[] = [
    { item: 'Nome', cost: 4 },
    { item: 'Sobrenome', cost: 5 },
    { item: 'Valor Solicitado', cost: 2 },
    { item: 'Parcelas', cost: 4 },
    { item: 'Valor da Parcela', cost: 25 },
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  totalFinanciado() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  popup() {
    const confimRef = this.dialog.open(DialogResultComponent);
    confimRef.afterClosed().subscribe(result => {

    });
  }
  aceiteTermos() {
    this.disabled = !this.disabled;
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogAceiteTermos);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.aceiteTermos()
        this.checked = true;
      }
    });
  }
}



