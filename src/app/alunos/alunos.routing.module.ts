import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes: Routes = [
    {path: 'alunos', component: AlunosComponent, children: [
        {path: 'new', component: AlunosFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/edit', component: AlunosFormComponent}
    ]}
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