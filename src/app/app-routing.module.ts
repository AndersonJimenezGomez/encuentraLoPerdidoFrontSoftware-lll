import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { ObjetoComponent } from './components/listar/objeto/objeto.component';
import { PublicacionComponent } from './components/registro/publicacion/publicacion.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "listar", component: ListarComponent},
  {path: "objeto", component: ObjetoComponent},
  {path: "registro-publicacion", component: PublicacionComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
