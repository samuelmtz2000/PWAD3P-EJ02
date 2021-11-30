export class LoginMessage {
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
}