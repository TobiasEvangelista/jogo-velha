import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoVelhaService {

  turnoAtual: number;
  status: boolean = false;
  tabuleiro: Array<number>= [];

  CondicoesVitoriaPlayer1: Array<Array<number>> = [
    [1,1,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,1],
    [1,0,0,1,0,0,1,0,0],
    [0,1,0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0,0,1],
    [0,0,1,0,1,0,1,0,0],
    [1,0,0,0,1,0,0,0,1],
    [1,0,0,1,0,0,1,0,0]
  ];

  CondicoesVitoriaPlayer2: Array<Array<number>> = [
    [2,2,2,0,0,0,0,0,0],
    [0,0,0,2,2,2,0,0,0],
    [0,0,0,0,0,0,2,2,2],
    [2,0,0,2,0,0,2,0,0],
    [0,2,0,0,2,0,0,2,0],
    [0,0,2,0,0,2,0,0,2],
    [0,0,2,0,2,0,2,0,0],
    [2,0,0,0,2,0,0,0,2]
  ];

  constructor() {
    this.status == false;
    this.tabuleiro = [0,0,0,0,0,0,0,0,0]
  }

  iniciarJogo(): void{
    this.tabuleiro = [0,0,0,0,0,0,0,0,0]
    this.turnoAtual = this.RandomPlayer();
    this.status = true;
  }

  RandomPlayer(): number{
    const First = Math.floor(Math.random() * 2) + 1;
    return First;
  }

  setCampo(position: number, value: number): void{
    this.tabuleiro[position] = value;
  }

  getPlayerColorClass(): String{
    const colorClass = (this.turnoAtual === 2 ) ? 'player-2' : 'player-1';
    return colorClass;
  }

  mudarTurno(): void{
    this.turnoAtual = (this.turnoAtual === 2) ? 1 : 2;
  }

  camposIguais(a: Array<any>, b: Array<any>): boolean{
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length &&
    a.every((value, index) => value === b[index]);
  }

  async Empate(): Promise<boolean>{
    let empate = true;

    if(this.tabuleiro.includes(0)){
      empate = false;
    }

    if(empate){
      console.log("Empate");
      this.fim();
      return true;
    }else{
      return false;
    }
  }

  async fimVencedor(): Promise<boolean>{
    let vencedor = false;

    const checarVitoria= (this.turnoAtual === 1) ? this.CondicoesVitoriaPlayer1 : this.CondicoesVitoriaPlayer2;

    const campoAtual = [];

    this.tabuleiro.forEach( (subcampo, index) => {
      if (subcampo !== this.turnoAtual){
        campoAtual[index] = 0;
      }else{
        campoAtual[index] = subcampo;
      }
    });

    checarVitoria.forEach((checarCampo, checarIndex) => {
      if(this.camposIguais(checarCampo, campoAtual)){
        vencedor = true;
      }
    });

    console.log(campoAtual);

    if(vencedor){
      this.fim();
      return true;
    }else{
      return false;
    }
  }

  fim(): void{
    this.status = false;
  }
}
