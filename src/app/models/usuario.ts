export class Usuario {
  public nombre: string;
  public password: string;
  public paginaweb: string;
  public informacion: string;
  public type: string;

  constructor(nombre: string, password: string, info: string, pagina: string = '') {
    this.nombre = nombre;
    this.password = password;
    this.informacion = info;
    this.paginaweb = pagina;
  }
}
