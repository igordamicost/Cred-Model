import { DadosSimulacao, DadosSimulados } from "src/app/interfaces/simulacao.interface";


export function calculadoraParcela(dadosSimulacao: DadosSimulacao) {

  let juros = 0
  if (dadosSimulacao.quantidadeParcelas <= 23) { juros = 0.05 }
  if (dadosSimulacao.quantidadeParcelas >= 24 && dadosSimulacao.quantidadeParcelas <= 36) { juros = 0.1 }
  if (dadosSimulacao.quantidadeParcelas >= 37 && dadosSimulacao.quantidadeParcelas <= 48) { juros = 0.15 }

  let valorTotal = dadosSimulacao.valorTotal;
  let quantidadeParcelas = dadosSimulacao.quantidadeParcelas;
  let valorTotalParcelas = valorTotal + (valorTotal * juros);
  let valorParcela = valorTotalParcelas / quantidadeParcelas;
  let dadosSimulados: DadosSimulados = {
    nome: dadosSimulacao.nome,
    sobrenome: dadosSimulacao.sobrenome,
    quantidadeParcelas: quantidadeParcelas,
    valorParcela: valorParcela,
    valorTotal: valorTotal,
    valorTotalParcelas: valorTotalParcelas
  }
  return dadosSimulados;
}
