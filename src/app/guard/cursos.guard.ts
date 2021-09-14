import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CursosGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        let id = route.params.id;
        if(state.url.includes(id)) {
            console.log('Guarda de rotas filhas - cursos/:id');
            return true;
        }

        console.log('Guard de rotas filhas - Cursos');
        return true;
    }

}