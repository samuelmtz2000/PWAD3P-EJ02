import { Component, OnInit } from '@angular/core';
import { HttpPokemonService } from '../http-pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex: Array<any> = [];
  constructor(private httpPokemon: HttpPokemonService) {
    for (let i = 1; i < 30; i++) {
      this.httpPokemon.getPokemon(i).then(data => this.pokedex.push(data))
      // this.pokedex.push(this.httpPokemon.getPokemon(i));
    }
    console.log(this.pokedex)
   }

  ngOnInit(): void {
  }

}
