import { Component, OnInit } from '@angular/core';
import { Objeto } from '../../modelos/objeto/objeto';
import { ObjetoService } from '../../services/objeto/objeto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.css']
})
export class ObjetoComponent implements OnInit {

  objetos: Objeto[] = [];
  objetoSelecionado = new Objeto;
  private objeto: Objeto = new Objeto();

  constructor(private objetoService: ObjetoService, private router: Router) { }

  ngOnInit() {
    this.objetoService.listAll().subscribe(
      (objetos) => {
        this.objetos = objetos;

      }
    );

  }
  ShowPopup(objeto: Objeto) {
    this.objetoSelecionado = objeto;
  }
  delete(objetoSelecionado: Objeto) {
    this.objetoService.delete(objetoSelecionado.id).subscribe(
      _ => {
        this.objetos = this.objetos.filter(objeto => objeto != objetoSelecionado);

      }
    );
  }

  public updateById(objetoSeleciona: Objeto): void {

    this.objetoService.updateById(this.objeto, this.objetoSelecionado.id).subscribe(
      _ => this.router.navigate(['/listar'])
    );
  }
}
