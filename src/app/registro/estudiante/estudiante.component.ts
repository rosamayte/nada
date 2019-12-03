import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// tslint:disable: variable-name

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  public formEstudiante: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formEstudiante = this._formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      codigo: ['', Validators.required],
      carrera: ['', Validators.required],
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
    console.log(this.formEstudiante.value);
  }

}
