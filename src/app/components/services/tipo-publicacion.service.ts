import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoPubicacion } from '../modelos/tipoPublicacion/tipo-pubicacion';


@Injectable({
  providedIn: 'root'
})
export class TipoPublicacionService {

  private ENDPOINT_BASE: string = "http://localhost:8080/api";
  private headerText = new HttpHeaders({ 'Content-Type': 'text/plain' });
  private headerJson = new HttpHeaders({ 'Content-Type': 'application/json' });



constructor(private http: HttpClient) { }

listAll(): Observable<TipoPubicacion[]> {
  return this.http.get<TipoPubicacion[]>(this.ENDPOINT_BASE.concat("/listar/tipo"));
}

}
