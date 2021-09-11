import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNotFoundComponent } from "./cursos/curso-not-found/curso-not-found.component";
import { AuthGuard } from './guard/auth.guard';
import { CursosGuard } from './guard/cursos.guard';

const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard]
  },
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'curso/:id', component: CursoDetalheComponent,
    canActivateChild: [CursosGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'nao-encontrado', component: CursoNotFoundComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
