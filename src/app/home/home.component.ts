import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { DadosSimulacao} from '../interfaces/simulacao.interface';
import { Simulacao } from '../services/simulacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public parcelas: any;
  public valor: any;



  onSubmit(form: any) {
    if (form.value.nome === '' || form.value.sobrenome === '') {
      alert('Insira seu Nome e Sobrenome');
    }
    if (form.value.parcelas < 12 || form.value.parcelas > 48) {
      alert('Parcelas invalidas. Escolher entre 12 e 48');
    }
    if (form.value.valor < 1000 || form.value.valor >= 100000) {
      alert('Emprestamos apenas entre 1000 e 100000 Reais');
    } else {
      console.log(form.value);
      this.simularEmprestimo(form)
    }
  }

  public simulado: boolean = false;


  private subscriptions: Subscription[]

  constructor(
    private simulacao: Simulacao,
  ) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
  }

  public simularEmprestimo(dadosForm:any){
    const subscription = this.simulacao.saveSimulacao(dadosForm)
    this.subscriptions.push(subscription)


  }

  public submeter(): void {
  }

}
