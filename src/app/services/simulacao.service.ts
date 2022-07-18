
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { calculadoraparcela } from 'src/api/responseSimulate';
import { DadosSimulados } from '../interfaces/simulacao.interface';
let transactions: DadosSimulados;
@Injectable({
  providedIn: 'root'
})
export class Simulacao {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  saveSimulacao(dadosSimulacao: any) {
    return calculadoraparcela(dadosSimulacao);
  }
  pegarValores(dadosSimulados: DadosSimulados, popular: boolean) {
    if (popular) {
      transactions = dadosSimulados;
    }
    return transactions
  }
}

