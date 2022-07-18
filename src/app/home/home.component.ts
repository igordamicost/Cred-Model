import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpClient } from '@angular/common/http';
import { DadosSimulacao, DadosSimulados } from '../interfaces/simulacao.interface';
import { Simulacao } from '../services/simulacao.service';

let dadosSimulados: DadosSimulados;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url = "https://calculadoraparcela.herokuapp.com/v2/api-docs";
  public parcelas: any;
  public valor: any;



  onSubmit(form: any) {
    if (form.value.nome === '' || form.value.sobrenome === '') {
      alert('Insira seu Nome e Sobrenome');
    }
    else if (form.value.valorTotal < 1000 || form.value.valorTotal > 100000) {
      alert('Emprestamos apenas entre 1000 e 100000 Reais');
    }
    else if (form.value.quantidadeParcelas < 12 || form.value.quantidadeParcelas > 48) {
      alert('Parcelas invalidas. Escolher entre 12 e 48');
    } else {
      console.log(form.value);
      this.simularEmprestimo(form)
    }
  }

  public simulado: boolean = false;


  constructor(private saveSimulacao: Simulacao) {

  }


  ngOnInit(): void {
  }

  public simularEmprestimo(form: any) {
    dadosSimulados = this.saveSimulacao.saveSimulacao(form.value)
    console.log(dadosSimulados)
    this.saveSimulacao.pegarValores(dadosSimulados, true)
    this.simulado = true;
  }

}


