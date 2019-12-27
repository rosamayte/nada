import { Injectable } from '@angular/core';
import { Carrera } from './models/carrera';
import { Usuario } from './models/usuario';
import { Empresa } from './models/empresa';
import { Estudiante } from './models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private empresas: Array<any> = [
    new Empresa(
      'empresa 1',
      'asdzxc',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      'www.empresa1.com',
    ),
    new Empresa(
      'empresa 2',
      'asdzxc',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      'www.empresa1.com',
    ),
    new Empresa(
      'empresa 3',
      'asdzxc',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    ),
  ];

  private estudiantes: Array<any> = [
    new Estudiante(
      'estudiante 1',
      'asdzxc',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      'estu1@upb.com',
      'Sistemas',
      5,
      12345
    ),
    new Estudiante(
      'estudiante 2',
      'asdzxc',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      'estu2@upb.com',
      'Sistemas',
      7,
      98765,
    ),
    new Estudiante(
      'estudiante 3',
      'asdzxc',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      'estu3@upb.com',
      'Admin',
      3,
      2345,
    ),
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

  private perfilEm: Empresa = new Empresa(
    'empresa1',
    'qweasd',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  );

  private perfilEs: Estudiante = new Estudiante(
    'estudiante1',
    'asdzxc',
    'info text',
    'mail@est.com',
    'carrera1',
    4,
    9782
  );

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

  public getPerfil = (): Empresa | Estudiante =>
    this.perfilEm
  // this.perfilEs
}
