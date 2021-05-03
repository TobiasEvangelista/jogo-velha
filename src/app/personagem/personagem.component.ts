import { Observable } from 'rxjs';
import { PersonagemApiService } from '../shared/personagem-api.service';

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit{

  constructor(
    public personagemService: PersonagemApiService,
    private formBuilder: FormBuilder,
  ) { }

  erro: any;
  player1 : Observable<any>;
  player2 : Observable<any>;
  jogador1: FormGroup;
  jogador2: FormGroup;
  jogador__1: {
    jogador1: any
  };
  jogador__2: {
    jogador2: any
  };

  ngOnInit() {
    this.jogador1 = this.formBuilder.group({
      jogador1: [null],
    })
    this.jogador2 = this.formBuilder.group({
      jogador2: [null]
    })

  }

  jogador_1(){
    this.jogador__1 = this.jogador1.value;
    this.player1 = this.personagemService.getAllCharacters(this.jogador__1.jogador1)
  }

  jogador_2(){
    this.jogador__2 = this.jogador2.value;
    this.player2 = this.personagemService.getAllCharacters(this.jogador__2.jogador2);
  }
}
