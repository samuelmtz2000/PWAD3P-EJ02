import { Component, OnInit } from '@angular/core';
import { HttpPokemonService } from '../http-pokemon.service';
import { SumaComponent } from '../suma/suma.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedex: Array<any> = [];
  suma: SumaComponent = new SumaComponent();
  index: number = 1;
  constructor(private httpPokemon: HttpPokemonService) {
    this.getPokes();
   }

  ngOnInit(): void {
    
  }
  getPokes(): void {
    let i = this.index;
    this.pokedex = [];
    for (i ; i < this.index + 30; i++) {
      this.httpPokemon.getPokemon(i).then(data => this.pokedex.push(data))
      // this.pokedex.push(this.httpPokemon.getPokemon(i));
    }
    this.index += 30;
  }
  calcularPokes(): void {
    this.suma.suma = this.pokedex.length;
    this.suma.show = true;
  }
}
