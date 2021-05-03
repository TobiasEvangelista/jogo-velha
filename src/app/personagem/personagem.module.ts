import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagemComponent } from './personagem.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [PersonagemComponent],
  exports: [
    PersonagemComponent
  ]
})
export class PersonagemModule { }
