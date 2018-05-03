import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmesService } from './filmes.service';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatCardModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';
import { YoutubePipe } from './youtube.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    DetalhesFilmeComponent,
    YoutubePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
