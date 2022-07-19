
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { calculadoraparcela } from 'src/api/responseSimulate';
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
}

