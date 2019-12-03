export class Empresa {
  public nombre: string;
  public password: string;
  public informacion: string;
  public pagina?: string;

  constructor(nombre: string, password: string, informacion: string, pagina?: string) {
    this.nombre = nombre;
    this.password = password;
    this.informacion = informacion;
    if (pagina) { this.pagina = pagina; }
  }
}
