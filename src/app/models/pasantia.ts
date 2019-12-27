export class Pasantia {
  public horario: string;
  public monto: number;
  public duracion: number;
  public comentarios: string;

  constructor(horario: string, monto: number, duracion: number, comentarios: string) {
    this.horario = horario;
    this.monto = monto;
    this.duracion = duracion;
    this.comentarios = comentarios;
  }
}
