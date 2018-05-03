import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from '../filmes.service';
import { Video } from '../video';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})
export class DetalhesFilmeComponent implements OnInit {
  videos: Video[];
  

  constructor( private route: ActivatedRoute, private filmeService: FilmesService) { }

  ngOnInit() {
    this.getFilme();
  }

  getFilme(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmeService.getDetalhesFilme(id)
      .subscribe(filme => {
        this.videos = filme.json().results;
        // console.log(this.videos);
      }, error => {
        console.log(error);
      });
  }

}
