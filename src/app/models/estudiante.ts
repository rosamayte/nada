import { Usuario } from './usuario';
import { Pasantia } from './pasantia';

export class Estudiante extends Usuario {
  public mail: string;
  public carrera: string;
  public codigo: number;
  public semestre: number;
  public buscando: boolean;
  public pasantia: Array<Pasantia>;

  constructor(
    nombre: string,
    password: string,
    info: string,
    mail: string,
    carrera: string,
    semestre: number,
    codigo: number,
    pagina: string = '',
    buscando: boolean = false,
    pasantia: Array<Pasantia> = []
  ) {
    super(nombre, password, info, pagina);
    super.type = 'estudiante';
    this.mail = mail;
    this.codigo = codigo;
    this.carrera = carrera;
    this.semestre = semestre;
    this.buscando = buscando;
    this.pasantia = pasantia;
  }
}
