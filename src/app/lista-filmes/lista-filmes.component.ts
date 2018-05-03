import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
  lista_filmes: any;

  constructor(private filmeService: FilmesService ) { }

  ngOnInit() {
    this.filmeService.getFilmes().subscribe(
      data=> {
        this.lista_filmes = data.json().results;
        // console.log(this.lista_filmes);
      }, error => {
        console.log(error);
      });
  }

  

}
