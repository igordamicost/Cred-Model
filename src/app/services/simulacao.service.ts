
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DadosSimulacao } from '../interfaces/simulacao.interface';


export class Simulacao {

  url = "https://calculadoraparcela.herokuapp.com/v2/api-docs";

  constructor(private http: HttpClient) { }

  saveSimulacao(dadosSimulacao: DadosSimulacao): Observable<any> {
    return this.http.post(this.url, dadosSimulacao);
  }
}
