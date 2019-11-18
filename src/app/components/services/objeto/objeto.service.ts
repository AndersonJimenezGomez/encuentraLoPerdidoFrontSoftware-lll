import { Injectable } from '@angular/core';
import { Objeto } from '../../modelos/objeto/objeto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {

    private ENDPOINT_BASE: string = "http://localhost:8080/api";
    private headerText = new HttpHeaders({ 'Content-Type': 'text/plain' });
    private headerJson = new HttpHeaders({ 'Content-Type': 'application/json' });



  constructor(private http: HttpClient) { }

  listAll(): Observable<Objeto[]> {
    return this.http.get<Objeto[]>(this.ENDPOINT_BASE.concat("/listar/objeto"));
  }
  delete(id: number): Observable<Objeto> {
    return this.http.delete<Objeto>(this.ENDPOINT_BASE.concat("/eliminar/objeto").concat(id.toString()), { headers: this.headerText });
  }
  insert(objeto: Objeto): Observable<Objeto> {
    return this.http.post<Objeto>(this.ENDPOINT_BASE.concat("/insertar/objeto"), objeto, { headers: this.headerJson });
  }
  update(objeto: Objeto): Observable<Objeto> {
    return this.http.put<Objeto>(this.ENDPOINT_BASE.concat("/actualizar/objeto"), objeto, { headers: this.headerJson });
  }
  updateById(objeto: Objeto, id: number): Observable<Objeto> {
    return this.http.put<Objeto>(this.ENDPOINT_BASE.concat("/actualizar/").concat(id.toString()), objeto, { headers: this.headerJson });
  }



}
