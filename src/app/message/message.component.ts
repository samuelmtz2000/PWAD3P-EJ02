import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: string;
 show: boolean;
 displayTime: number;
 type: string;
 constructor(message: string, type:string, show: boolean, displayTime: number){
  this.message = message;
  this.show = show;
  this.displayTime = displayTime;
  this.type = type
 }
  ngOnInit(): void {
  }

}
