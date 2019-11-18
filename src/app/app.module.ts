import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListarComponent } from './components/listar/listar.component';
import { ObjetoComponent } from './components/listar/objeto/objeto.component';
import { PublicacionComponent } from './components/registro/publicacion/publicacion.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListarComponent,
    ObjetoComponent,
    PublicacionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
