import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';

const routes: Routes = [
  { path: 'home', component: ListaFilmesComponent},
  { path: 'filme/:id', component: DetalhesFilmeComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
