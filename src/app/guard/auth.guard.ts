import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, RouterStateSnapshot, ActivatedRouteSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  private checkAccess() {
    if (this.authService.userIsAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('Guarda de Autenticação para poder liberar as rotas');
    return this.checkAccess();
  }

  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean | any {
    console.log('Protegendo os módulos da aplicação com o Guarda de Rotas: CanLoad');
    return this.checkAccess();
  }

  constructor(private authService: AuthenticationService, private router: Router) { }


}
