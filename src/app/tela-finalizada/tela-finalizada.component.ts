import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-finalizada',
  templateUrl: './tela-finalizada.component.html',
  styleUrls: ['./tela-finalizada.component.scss']
})
export class TelaFinalizadaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    debugger
    const nav = this.router.getCurrentNavigation();
    console.log(nav?.extras.queryParams, 'nav');
  }

}
