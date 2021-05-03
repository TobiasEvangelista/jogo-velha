import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class Personagem {
    nome: string;
    thumbnail: {
      path: string,
      extension: string
    }

}

