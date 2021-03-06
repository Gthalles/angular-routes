import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';
import { AlunosGuard } from '../guard/alunos.guard';
import { AlunosDeactivateGuard } from '../guard/alunos-deactivate.guard';
import { AlunoDetalheResolver } from '../guard/aluno-detalhe.resolver';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ]
})

export class AlunosModule { }
