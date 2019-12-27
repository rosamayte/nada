import { Usuario } from './usuario';
import { Anuncio } from './anuncio';

export class Empresa extends Usuario {

  public anuncios: Array<Anuncio>;

  constructor(
    nombre: string,
    password: string,
    info: string,
    pagina: string = '',
    anuncios: Array<Anuncio> = []
  ) {
    super(nombre, password, info, pagina);
    super.type = 'empresa';
    this.anuncios = anuncios;
  }
}
