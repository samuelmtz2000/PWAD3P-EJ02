import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpPokemonService {
url = "https://localhost:44326/";
  error: any;
  constructor(private httpClient: HttpClient) {
  }
  getPokemon(id: number){
    // contrasenia = JSON.parse(contrasenia);
    return new Promise(resolve =>{
      this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .subscribe(data =>{
        resolve(data);
      },error =>{
        console.error(error);
        this.error= error;
      })
    })
   }
}
