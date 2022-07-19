import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectSimulado } from '../services/creditoContratado.sevice';


@Component({
  selector: 'app-tela-finalizada',
  templateUrl: './tela-finalizada.component.html',
  styleUrls: ['./tela-finalizada.component.scss']
})
export class TelaFinalizadaComponent implements OnInit {
  dadosSimulados: any;
  constructor(
   private objectSalvo: ObjectSimulado,
   private router: Router
  ) { }

  ngOnInit(): void {
   this.dadosSimulados = this.objectSalvo.envioObj('', false);
  }
  popup(){
    this.router.navigate(['Home']);
  }
}
