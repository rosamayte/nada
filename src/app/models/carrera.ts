
export class Carrera {
  public id: string;
  public nombre: string;
  public estado: boolean;

  constructor(nombre: string, estado: boolean, id?: string) {
    if (id) { this.id = id; }
    this.nombre = nombre;
    this.estado = estado;
  }
}
