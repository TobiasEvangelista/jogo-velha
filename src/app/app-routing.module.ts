import { JogoVelhaComponent } from './jogo-velha/jogo-velha.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/personagens', pathMatch: 'full'
  },
  {
    path: 'personagens', component: PersonagemComponent
  },
  {
    path: 'jogo', component: JogoVelhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
