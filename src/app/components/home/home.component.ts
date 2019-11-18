import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../modelos/publicacion/publicacion';
import { Objeto } from '../modelos/objeto/objeto';
import { PublicacionService } from '../services/publicacion/publicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  objetos: Objeto = new Objeto;
  publicaciones: Publicacion[] = [];

  publicacionSeleccionada = new Publicacion;
  private publicacion: Publicacion = new Publicacion();


  constructor(private publicacionService: PublicacionService, private router: Router) { }

  ngOnInit() {
    this.publicacionService.listAll().subscribe(
      (publicaciones) => {
        this.publicaciones = publicaciones;

      }
    );
;
  }

}
