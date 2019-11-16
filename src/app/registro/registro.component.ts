import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
public tipo: string;
  
  constructor(private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    let t = this._route.snapshot.paramMap.get('tipo');
    this.tipo = t == 'estudiante' || t == 'empresa' ? t: null;
  }

}
