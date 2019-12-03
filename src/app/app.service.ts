import { Injectable } from '@angular/core';
import { Carrera } from './models/carrera';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private empresas: Array<any> = [
    {
      nombre: 'empresa 1',
      password: 'qweasdzxc',
      pagina: 'empresa1.com',
      informacion:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      nombre: 'empresa 2',
      password: 'qweasdzxc',
      pagina: 'empresa2.com',
      informacion:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      nombre: 'empresa 3',
      password: 'qweasdzxc',
      pagina: 'empresa3.com',
      informacion:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
  ];

  private estudiantes: Array<any> = [
    {
      nombre: 'estudiante 1',
      password: 'asdzxc',
      correo: 'estu1@upb.com',
      codigo: 12345,
      carrera: 'Sistemas',
      pagina: '',
      informacion:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      nombre: 'estudiante 2',
      password: 'asdzxc',
      correo: 'estu2@upb.com',
      codigo: 98765,
      carrera: 'Sistemas',
      pagina: '',
      informacion:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
    {
      nombre: 'estudiante 3',
      password: 'asdzxc',
      correo: 'estu3@upb.com',
      codigo: 2345,
      carrera: 'Admin',
      pagina: '',
      informacion:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    },
  ];

  private carreras: Array<Carrera> = [
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

  constructor() { }

  public getEmpresas = (): Array<any> => this.empresas;
  public getEstudiantes = (): Array<any> => this.estudiantes;
  public getCarreras = (): Array<any> => this.carreras;

  public addEmpresa = (empresa: any): void => {
    this.empresas.push(empresa);
  }
  public addEstudiante = (estudiante: any): void => {
    this.estudiantes.push(estudiante);
  }
  public addCarrera = (carrera: Carrera): void => {
    this.carreras.push(carrera);
  }

  public getEmpresa = (index: number): any => this.empresas[index];
  public getEstudiante = (index: number): any => this.estudiantes[index];
  public getCarrera = (index: number): any => this.carreras[index];
}
