import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ObjectSimulado {
  constructor() {}

  dadosSimuladosSalvos: any;

  envioObj(dadosSimulacao: any, altera: boolean) {
    if (altera) {
      this.dadosSimuladosSalvos = dadosSimulacao;
    }
    return this.dadosSimuladosSalvos;
  }
}
