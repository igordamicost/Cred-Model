import { Component, Input, OnInit } from '@angular/core';
import { DadosSimulados } from 'src/app/interfaces/simulacao.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogAceiteTermos } from '../dialog-aceite-termos.component.html/dialog-aceite-termos.component.html.component';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

let retornoDados: DadosSimulados;
@Component({
  selector: 'app-after-simulate',
  templateUrl: './after-simulate.component.html',
  styleUrls: ['./after-simulate.component.scss'],
})
export class AfterSimulateComponent implements OnInit {
  disabled = true;
  checked = false;
  nomeRetorno: string = '';
  sobrenomeRetorno: string = '';
  valorTotalRetorno: string = '';
  quantidadeParcelasRetorno: string = '';
  valorParcelaRetorno: string = '';
  valorTotalparcelasRetorno: string = '';

  @Input()
  set nome(nome: string) {
    this.nomeRetorno = nome;
  }
  @Input()
  set sobrenome(sobrenome: string) {
    this.sobrenomeRetorno = sobrenome;
  }
  @Input()
  set valorTotal(valorTotal: string) {
    this.valorTotalRetorno = valorTotal;
  }
  @Input()
  set valorParcela(valorParcela: string) {
    this.valorParcelaRetorno = valorParcela;
  }
  @Input()
  set quantidadeParcelas(quantidadeParcelas: string) {
    this.quantidadeParcelasRetorno = quantidadeParcelas;
  }
  @Input()
  set valorTotalParcelas(valorTotalParcelas: string) {
    this.valorTotalparcelasRetorno = valorTotalParcelas;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {

  }

  popup() {
    this.dialog.open(DialogResultComponent, {
      data: {
        nome: this.nomeRetorno,
        sobrenome: this.sobrenomeRetorno,
        valorTotal: this.valorTotalRetorno,
        valorParcela: this.valorParcelaRetorno,
        quantidadeParcelas: this.quantidadeParcelasRetorno,
        valorTotalParcelas: this.valorTotalparcelasRetorno,
      },
    });
  }

  aceiteTermos() {
    this.disabled = !this.disabled;
  }

  openDialog(): void {
    this.dialog.open(DialogAceiteTermos);
    this.aceiteTermos();
    this.checked = true;
  }
}
