import { Injectable } from '@angular/core';
import { Publicacion } from '../../modelos/publicacion/publicacion';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

    private ENDPOINT_BASE: string = "http://localhost:8080";
    private headerText = new HttpHeaders({ 'Content-Type': 'text/plain' });
    private headerJson = new HttpHeaders({ 'Content-Type': 'application/json' });



  constructor(private http: HttpClient) { }

  listAll(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.ENDPOINT_BASE.concat("/publicacion/publicaciones"));
  }
  delete(id: number): Observable<Publicacion> {
    return this.http.delete<Publicacion>(this.ENDPOINT_BASE.concat("/publicacion/eliminar/publicacion/").concat(id.toString()), { headers: this.headerText });
  }
  insert(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.post<Publicacion>(this.ENDPOINT_BASE.concat("/insertar/publicacion"), publicacion, { headers: this.headerJson });
  }
  update(publicacion: Publicacion): Observable<Publicacion> {
    return this.http.put<Publicacion>(this.ENDPOINT_BASE.concat("/actualizar/publicacion"), publicacion, { headers: this.headerJson });
  }
  updateById(publicacion: Publicacion, id: number): Observable<Publicacion> {
    return this.http.put<Publicacion>(this.ENDPOINT_BASE.concat("/actualizar/").concat(id.toString()), publicacion, { headers: this.headerJson });
  }



}
