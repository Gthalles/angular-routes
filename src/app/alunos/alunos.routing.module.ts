import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosGuard } from '../guard/alunos.guard';
import { AlunosDeactivateGuard } from '../guard/alunos-deactivate.guard';
import { AlunoDetalheResolver } from '../guard/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
    {
        path: '',
        component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            {
                path: 'new',
                component: AlunosFormComponent
            },
            {
                path: ':id',
                component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver }
            },
            {
                path: ':id/edit',
                component: AlunosFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(alunosRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AlunosRoutingModule { }