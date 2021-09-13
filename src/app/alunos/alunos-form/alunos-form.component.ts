import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Deactivate } from 'src/app/guard/deactivate.interface';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, Deactivate {

  inscricao: Subscription | undefined;
  aluno: any = {};
  private formChanged: boolean = false;

  onInput() {
    this.formChanged = true;
    console.log('change on input');
  }

  canChangeRoute() {
    if(this.formChanged) {
      confirm('Deseja mesmo sair dessa página?');
    }

    return true;
  }

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if(this.aluno === null) {
          this.aluno = "";
        }
      }
    )
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

}
