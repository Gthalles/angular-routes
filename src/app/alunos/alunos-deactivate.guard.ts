import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Deactivate } from '../guard/deactivate.interface';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<Deactivate> {

  canDeactivate(
    component: Deactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('Deactivate guard its okay');
    
    return component.canChangeRoute();

  }
}
