import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs/operators';

// tslint:disable: variable-name

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public tipo: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    // const t = this._route.snapshot.paramMap.get('tipo');
    // let t = '';
    this._route.url.subscribe(url => {
      const t = `${url[1]}`;
      this.tipo = t === 'estudiante' || t === 'empresa' ? t : null;
      // console.log(t);
    });
  }

}
