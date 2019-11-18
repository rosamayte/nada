import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public tipo: string;
  public formEstudiante: FormGroup;
  public formEmpresa: FormGroup;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formEstudiante = this._formBuilder.group({
      nombre: ['', Validators.required],
      contrasenia: ['', Validators.required],
      correo: ['', Validators.required],
      codigo: ['', Validators.required],
      carrera: ['', Validators.required],
      pagina: [''],
      informacion: ['', Validators.required]
    });
    this.formEmpresa = this._formBuilder.group({
      nombre: ['', Validators.required],
      contrasenia: ['', Validators.required],
      pagina: [''],
      informacion: ['', Validators.required]
    });
    let t = this._route.snapshot.paramMap.get('tipo');
    this.tipo = t == 'estudiante' || t == 'empresa' ? t : null;
  }

  public registrar = (estudiante: boolean) => {
    if (estudiante) {
      // enviar a estudiante
    } else {
      // enviar a empresa
    }
  }


}
