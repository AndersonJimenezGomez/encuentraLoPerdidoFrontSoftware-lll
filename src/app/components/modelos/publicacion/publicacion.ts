import { Objeto } from '../objeto/objeto';
import { Categoria } from '../categoria/categoria';
import { TipoPubicacion} from '../tipoPublicacion/tipo-pubicacion';
import { Persona } from '../persona/persona.component';
;export class Publicacion {

  id: number;
  fecha: String;
  descripcion: String;
  objetos: Objeto;
  categorias: Categoria;
  tipoPublicacion: TipoPubicacion;
  persona: Persona;

}
