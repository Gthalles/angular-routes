import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

@Injectable()

export class AlunosDeactivateGuard implements CanDeactivate<AlunosFormComponent> {
  canDeactivate(
    component: AlunosFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Deactivate guard its okay');
    return component.canChangeRoute();

  }
}
