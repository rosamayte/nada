import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';
import { AppService } from '../app.service';
import { Estudiante } from '../models/estudiante';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public perfil: Empresa | Estudiante;

  constructor(
    private _service: AppService
  ) { }

  ngOnInit() {
    this.perfil = this._service.getPerfil();
    console.log(this.perfil);
  }

}
