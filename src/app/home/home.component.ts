import { Component, Inject, OnInit, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators
} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  onSubmit(form: any) {
    if(form.value.nome === '' || form.value.sobrenome === '') {
      alert('Insira seu Nome e Sobrenome');
    }
    if (form.value.parcelas < 12 || form.value.parcelas > 48) {
      alert('Parcelas invalidas. Escolher entre 12 e 48');
    }
    if (form.value.valor < 1000 || form.value.valor >= 100000) {
      alert('Emprestamos apenas entre 1000 e 100000 Reais');
    } else {
      console.log(form.value);
    this.simularEmprestimo()
    }
  }

  simulado: boolean = false;
  public nome: any;


  constructor(
  ) { }

  ngOnInit(): void {
  }
  public simularEmprestimo() {
    this.simulado = !this.simulado;
  }
  public submeter(): void {
  }
}
