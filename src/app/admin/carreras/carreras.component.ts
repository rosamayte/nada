import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {

  private carrerasMock: Array<Carrera> = [
    {
      id: 'sadkndqwo',
      nombre: 'carrera 1',
      estado: false
    },
    {
      id: 'aslkmxlas',
      nombre: 'carrera 2',
      estado: true
    },
    {
      id: 'asdmaspdw',
      nombre: 'carrera 3',
      estado: false
    },
    {
      id: 'cmzoas',
      nombre: 'carrera 4',
      estado: true
    },
    {
      id: 'zxcas',
      nombre: 'carrera 5',
      estado: false
    },
    {
      id: 'asdqwe',
      nombre: 'carrera 6',
      estado: true
    },
  ];

  public carreras: Array<Carrera> = this.carrerasMock;

  constructor() { }

  ngOnInit() {
  }

  public clickCheck = (index: number): void => {
    const carrera: Carrera = this.carreras[index];
    // console.log(carrera);
    carrera.estado = !carrera.estado;
  }

  public addCarrera = (nombre: string): void => {
    // console.log('Añadido ' + nombre);
    this.carreras.push(new Carrera(nombre, false));
  }

}
