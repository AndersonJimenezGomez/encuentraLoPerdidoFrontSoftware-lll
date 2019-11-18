import { Component, OnInit } from '@angular/core';
import { Publicacion } from '../modelos/publicacion/publicacion';
import { PublicacionService } from '../services/publicacion/publicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  publicaciones: Publicacion[] = [];
  publicacionSeleccionada = new Publicacion ();
  private publicacion: Publicacion = new Publicacion();

  constructor(private publicacionService: PublicacionService, private router: Router) { }

  ngOnInit() {
    this.publicacionService.listAll().subscribe(
      (publicaciones) => {
        this.publicaciones = publicaciones;

      }
    );

  }
  ShowPopup(publicacion: Publicacion) {
    this.publicacionSeleccionada = publicacion;
  }
  delete(publicacionSeleccionada: Publicacion) {
    this.publicacionService.delete(publicacionSeleccionada.id).subscribe(
      _ => {
        this.publicaciones = this.publicaciones.filter(publicacion => publicacion != publicacionSeleccionada);

      }
    );
  }

  public updateById(publicacionSeleciona: Publicacion): void {

    this.publicacionService.updateById(this.publicacion, this.publicacionSeleccionada.id).subscribe(
      _ => this.router.navigate(['/listar'])
    );
  }
}
