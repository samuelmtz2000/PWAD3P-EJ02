import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpUsersService{
  url = "https://localhost:44326/";
  error: any;
  constructor(private httpClient: HttpClient) {
  }
  login(nombreUsuario: string, contrasenia: string){
    // contrasenia = JSON.parse(contrasenia);
    return new Promise(resolve =>{
      this.httpClient.get(this.url+`api/Usuarios/login?nombreUsuario=${nombreUsuario}&contrasenia=${contrasenia}`)
      .subscribe(data =>{
        resolve(data);
      },error =>{
        console.error(error);
        this.error= error;
      })
    })
   }
}
