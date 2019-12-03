import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

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
    this._route.url.subscribe(url => {
      const t = `${url[1]}`;
      this.tipo = t === 'estudiantes' || t === 'empresas' ? t : null;
      // console.log(t);
    });
  }

}
