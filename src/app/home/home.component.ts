import { Component, Input, OnInit } from '@angular/core';
import { DadosSimulados } from '../interfaces/simulacao.interface';
import { Simulacao } from '../services/simulacao.service';

let dadosSimulados: DadosSimulados;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  url = 'https://calculadoraparcela.herokuapp.com/v2/api-docs';
  public parcelas: any;

  onSubmit(form: any) {
    if (form.value.nome === '' || form.value.sobrenome === '') {
      alert('Insira seu Nome e Sobrenome');
    } else if (form.value.valorTotal < 1000 || form.value.valorTotal > 100000) {
      alert('Emprestamos apenas entre 1000 e 100000 Reais');
    } else if (
      form.value.quantidadeParcelas < 12 ||
      form.value.quantidadeParcelas > 48
    ) {
      alert('Parcelas invalidas. Escolher entre 12 e 48');
    } else {
      this.simularEmprestimo(form);
    }
  }

  public simulado: boolean = false;

  constructor(private saveSimulacao: Simulacao) {}
  @Input() dadosEnviados: DadosSimulados[] = [];
  @Input() nome: string = '';
  @Input() sobrenome: string = '';
  @Input() valorTotal: string = '';
  @Input() valorParcela: string = '';
  @Input() valorTotalParcelas: string = '';
  @Input() quantidadeParcelas: string = '';

  ngOnInit(): void {}

  public simularEmprestimo(form: any) {
    (dadosSimulados = this.saveSimulacao.saveSimulacao(form.value)),
      (this.nome = dadosSimulados.nome);
    this.sobrenome = dadosSimulados.sobrenome;
    this.valorTotal = dadosSimulados.valorTotal.toFixed(2).toString();
    this.valorParcela = dadosSimulados.valorParcela.toFixed(2).toString();
    this.valorTotalParcelas = dadosSimulados.valorTotalParcelas
      .toFixed(2)
      .toString();
    this.quantidadeParcelas = dadosSimulados.quantidadeParcelas.toString();
    this.simulado = true;
  }
}
