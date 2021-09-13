import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursosGuard } from '../guard/cursos.guard';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent
  ],
  exports: [

  ],
  providers: [
    CursosService,
    CursosGuard
  ]
})
export class CursosModule { }
