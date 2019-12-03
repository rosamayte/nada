export class Anuncio {
  public nombre: string;
  public descripcion: string;
  public estado: boolean;
  public fecha: Date;

  constructor(nombre: string, descripcion: string, estado: boolean, fecha: Date) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fecha = fecha;
  }
}
