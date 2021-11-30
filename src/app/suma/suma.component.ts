import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  suma: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.suma = 5 + 10
  }


}
