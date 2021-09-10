import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticated: boolean = false;
  showMenuEmitter = new EventEmitter<boolean>();

  authentication(user: User) {
    if (user.name === null) {
      console.log('Campo de nome de usuário obrigatório!');
    } else if (user.name.length <= 5) {
      console.log('Mínimo de 5 dígitos');
    } else if (user.name === 'thalles@gempe.dev'){
      if(user.password === null) {
        console.log('Campo de senha obrigatório');
      } else if (user.password.length <= 5) {
        console.log('Mínimo de 5 dígitos');
      } else if (user.password === '020818') {
        this.authenticated = true;
        this.showMenuEmitter.emit(true);
        this.router.navigate(['/']);
      } else {
        console.log('Senha incorreta');
        this.showMenuEmitter.emit(false);
      }
    } else {
      console.log('Nome de usuário incorreto!');
      this.showMenuEmitter.emit(false);
    }
  }

  constructor(private router: Router) { }

}
