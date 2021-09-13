import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../login/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean>| boolean {

    console.log('Guarda de Autenticação para poder liberar as rotas');
    if (this.authService.userIsAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  constructor(private authService: AuthenticationService, private router: Router) { }


}
