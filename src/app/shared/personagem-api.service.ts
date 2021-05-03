import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Personagem } from './Personagem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemApiService {

 PUBLIC_KEY = 'f6a27dd51a7ec2a91a50370b25b7e0d6';
 HASH = 'df567b089f35fe4baac19c0b9d26ab9c';
 URL_API = 'https://gateway.marvel.com:443/v1/public/characters?';



constructor(private http: HttpClient,  private personagem: Personagem) { }

  getAllCharacters(nome): Observable<any>{
    var url = this.URL_API + 'name='+ nome + '&ts=1' + '&apikey=' + this.PUBLIC_KEY  + '&hash='
      + this.HASH;
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  };

  incrementa(valor): number{
    return valor++
  }

  decrementa(valor): number{
    return valor--;
  }

}
