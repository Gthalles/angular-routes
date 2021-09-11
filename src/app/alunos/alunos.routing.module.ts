import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosGuard } from "./alunos.guard";

const alunosRoutes: Routes = [
    {
        path: '', component: AlunosComponent,
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'new', component: AlunosFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/edit', component: AlunosFormComponent }
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


export class AlunosRoutingModule {

}