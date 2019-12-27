import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  public empresas: Array<Empresa>;

  constructor(
    private _service: AppService
  ) { }

  ngOnInit() {
    this.empresas = this._service.getEmpresas();
  }

}
