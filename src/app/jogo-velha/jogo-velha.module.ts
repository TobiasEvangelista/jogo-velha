import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoVelhaComponent } from './jogo-velha.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JogoVelhaComponent],
  exports:[
    JogoVelhaComponent
  ]
})
export class JogoVelhaModule { }
