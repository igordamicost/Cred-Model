import { Component, OnInit } from '@angular/core';
import { DadosSimulacao, dadosteste } from 'src/app/interfaces/simulacao.interface';

@Component({
  selector: 'app-dialog-result',
  templateUrl: './dialog-result.component.html',
  styleUrls: ['./dialog-result.component.scss']
})
export class DialogResultComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: dadosteste[] = [
    { item: 'Nome', cost: 4 },
    { item: 'Sobrenome', cost: 5 },
    { item: 'Valor Solicitado', cost: 2 },
    { item: 'Parcelas', cost: 4 },
    { item: 'Valor da Parcela', cost: 25 },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  totalFinanciado() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  confirmar(){

  }
}
