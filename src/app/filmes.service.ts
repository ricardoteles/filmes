import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmesService {
  pathApi: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'd0481173a63b35afb1f80f3e223e73c8';

  constructor(private http: Http) { }

  getFilmes(){
    return this.http.get(this.pathApi+'/movie/popular?api_key='+this.apiKey);
  }
  
  getDetalhesFilme(movie_id: number){
    return this.http.get(this.pathApi+'/movie/'+movie_id+'/videos?api_key='+this.apiKey);
  }
}
