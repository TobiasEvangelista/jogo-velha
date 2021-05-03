import { PersonagemApiService } from './../shared/personagem-api.service';
import { JogoVelhaService } from '../shared/jogo-velha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.component.html',
  styleUrls: ['./jogo-velha.component.scss']
})
export class JogoVelhaComponent implements OnInit {

  constructor(
    public jogoVelhaService: JogoVelhaService,
    public personagemApiService: PersonagemApiService
    ) { }

  ngOnInit() {
  }

  iniciarJogo(): void{
    this.jogoVelhaService.iniciarJogo();
    const jogadorAtual = 'Turno: Jogador ' + this.jogoVelhaService.turnoAtual;
    const informacao = document.querySelector('.current-status');
    informacao.innerHTML = jogadorAtual;
  }

  async clickCampo(subcampo: any): Promise<void>{
    if(this.jogoVelhaService.status == true){
      const position = subcampo.currentTarget.getAttribute('position');
      const informacao = document.querySelector('.current-status');

      this.jogoVelhaService.setCampo(position, this.jogoVelhaService.turnoAtual);
      const color = this.jogoVelhaService.getPlayerColorClass();
      subcampo.currentTarget.classList.add(color);

      await this.jogoVelhaService.fimVencedor().then((end: boolean) => {
        if(this.jogoVelhaService.status == false && end){
          informacao.innerHTML= 'Vencedor: Player' + this.jogoVelhaService.turnoAtual;
        }
      });

      await this.jogoVelhaService.Empate().then((end: boolean) => {
        if(this.jogoVelhaService.status == false && end){
          informacao.innerHTML= 'Empate';
        }
      });

      this.jogoVelhaService.mudarTurno();

      if(this.jogoVelhaService.status == true){
        const jogadorAtual = 'Jogador: ' + this.jogoVelhaService.turnoAtual;
        informacao.innerHTML= jogadorAtual;
      }


    }
  }
}
