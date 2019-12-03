import { Component, OnInit } from '@angular/core';
import { Jefe } from 'src/app/models/jefe';
import { Carrera } from 'src/app/models/carrera';

@Component({
  selector: 'app-jefes',
  templateUrl: './jefes.component.html',
  styleUrls: ['./jefes.component.css']
})
export class JefesComponent implements OnInit {

  private jefesMock: Array<Jefe> = [
    {
      nombre: 'Mauro',
      carrera: 'Financiera',
      password: 'zxcqwe',
      usuario: 'user 1'
    },
    {
      nombre: 'Jesica',
      carrera: 'Admin',
      password: 'asdqwe',
      usuario: 'user 2'
    },
    {
      nombre: 'Alexis',
      carrera: 'Sistemas',
      password: 'qweasd',
      usuario: 'user 3'
    },
  ];

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

  public jefes: Array<Jefe> = this.jefesMock;

  public carreras: Array<Carrera> = this.carrerasMock;

  constructor() { }

  ngOnInit() {
  }

}
