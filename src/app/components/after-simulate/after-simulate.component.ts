import { Component, Inject, OnInit } from '@angular/core';
import { DadosSimulacao, DadosSimulados, dadosTeste } from 'src/app/interfaces/simulacao.interface';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAceiteTermos } from '../dialog-aceite-termos.component.html/dialog-aceite-termos.component.html.component';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import { Simulacao } from 'src/app/services/simulacao.service';
let retornoDados: DadosSimulados;
@Component({
  selector: 'app-after-simulate',
  templateUrl: './after-simulate.component.html',
  styleUrls: ['./after-simulate.component.scss']
})

export class AfterSimulateComponent implements OnInit {
  disabled = true;
  checked = false;
  transactions: dadosTeste[] = [
    { item: 'nome', cost: '' },
    { item: 'sobrenome', cost: '' },
    { item: 'quantidadeParcelas', cost: '' },
    { item: 'Parcelas', cost: '' },
    { item: 'Valor da Parcela', cost: '' },
    { item: 'Valor Total', cost: '' }
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) public dadosSimulados: any,
    private saveSimulacao: Simulacao,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    debugger
    retornoDados = this.saveSimulacao.pegarValores(retornoDados, false)
    this.montarTabla()
    console.log(retornoDados)
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
  montarTabla() {
    console.log(this.dadosSimulados,'DEU CERTO FDP')
  }
}

