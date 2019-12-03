import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// tslint:disable: variable-name

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})
export class PendientesComponent implements OnInit {
  public tipo: string;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const t = this._route.snapshot.paramMap.get('tipo');
    this.tipo = t === 'estudiantes' || t === 'empresas' ? t : null;
  }

}
