import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../../modelos/publicacion/publicacion';
import { PublicacionService } from '../../services/publicacion/publicacion.service';
import { Router } from '@angular/router';
import { Objeto } from '../../modelos/objeto/objeto';
import { TipoPubicacion } from '../../modelos/tipoPublicacion/tipo-pubicacion';
import { Categoria } from '../../modelos/categoria/categoria';
import { Persona } from '../../modelos/persona/persona.component';
import { TipoPublicacionService } from '../../services/tipo-publicacion.service';
@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  public publicacion: Publicacion = new Publicacion();
  public tipoPublicacion: TipoPubicacion = new TipoPubicacion();
  public objeto: Objeto = new Objeto();

  public categoria: Categoria = new Categoria();
  public persona: Persona = new Persona();

  tipoPublicaciones: TipoPubicacion[] = [];
  tipoPublicacionSelecionada = new TipoPubicacion();

  constructor(private publicacionService: PublicacionService,
     private tipoPublicacionService: TipoPublicacionService,
    private router: Router) { }

  ngOnInit() {

    this.tipoPublicacionService.listAll().subscribe(
      (tipoPublicaciones) => {
        this.tipoPublicaciones = tipoPublicaciones;
      }
    );

  }
  public insert(): void {
    //no tocar ni borrar
    
    this.publicacion.id = 1;
    //this.publicacion.tipoPublicacion= this.tipoPublicacion;
  
    
    // this.publicacion.fecha = "20/10/11";
    this.objeto.id = 5;
    this.publicacion.objetos = this.objeto;
    console.log(this.tipoPublicacion.tipoPublicacion)
    this.tipoPublicacion.id= 2;
   // this.tipoPublicacion.id = 1;
    //this.tipoPublicacion.tipoPublicacion="";
    this.publicacion.tipoPublicacion=this.tipoPublicacion;
    console.log(this.publicacion.tipoPublicacion.tipoPublicacion);
    this.categoria.id = 2;
    this.publicacion.categorias = this.categoria;

    this.persona.id = 1;
    this.publicacion.persona = this.persona;

    //this.publicacion.fecha = new Date().toString();
    this.publicacionService.insert(this.publicacion).subscribe(
      _ => this.router.navigate(['/listar'])
    )
  }
}
