import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

// tslint:disable: variable-name

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  public formEmpresa: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: AppService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.formEmpresa = this._formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
      pagina: [''],
      informacion: ['', Validators.required]
    });
    ((): void => {
      'use strict';
      window.addEventListener('load', (): void => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, (form) => {
          form.addEventListener('submit', (event) => {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              this.registrar();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }

  public registrar = (): void => {
    console.log(this.formEmpresa.value);
    this._service.addEmpresa(this.formEmpresa.value);
    alert('Registro completado.\nSerá notificado(a) cuando se apruebe su solicitud.');
    this._router.navigateByUrl('/#');
  }

}
