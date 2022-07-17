import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formSimulacao: any;
  simulado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  public exibirSimulacao(){
    this.simulado = !this.simulado
  }
  public submeter(): void {
    this.formSimulacao.getRawValue();
  }
}
