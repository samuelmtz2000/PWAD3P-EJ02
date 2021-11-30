import { Component, OnInit } from '@angular/core';
import { HttpUsersService } from '../http-users.service';
import { LoginMessage } from './login.message';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  contrasenia: string = "";
  login: any = false
  message: LoginMessage = new LoginMessage("", "", false, 0);
  constructor(public httpService: HttpUsersService) { }

  ngOnInit(): void {
  }

  submit(){
    this.httpService.login(this.usuario, this.contrasenia)
    .then(data=>{
      this.login = data
    })
    if(this.login){
      this.message = new LoginMessage("Inicio de sesión correcto", "success", true, 5000)
    }else{
      this.message = new LoginMessage("Usuario o contraseña incorrectas", "danger", true, 5000)
    }
    if(this.httpService.error){
      this.message = new LoginMessage("Error de servidor", "danger", true, 5000)
    }
  }
}
