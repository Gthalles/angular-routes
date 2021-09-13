import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  id: number = 0;
  inscricao: Subscription | undefined;
  aluno: any;

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'edit'])
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    /*
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.aluno = this.alunosService.getAluno(this.id);
      }
    )
    */
    9
    console.log('Inicializando AlunoDetalheComponent..');

    this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log('Recebendo { objeto:Aluno } do Resolver..');
        return this.aluno = info.aluno;
      });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

}
