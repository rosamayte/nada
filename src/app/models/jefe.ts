export class Jefe {
  public nombre: string;
  public carrera: string;
  public usuario: string;
  public password: string;

  constructor(nombre: string, carrera: string, usuario: string, password: string) {
    this.nombre = nombre;
    this.carrera = carrera;
    this.usuario = usuario;
    this.password = password;
  }
}
