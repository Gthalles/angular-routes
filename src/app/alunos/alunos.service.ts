import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})

export class AlunosService {
  alunos: Aluno[] = [
    new Aluno(0, 'thalles', 'thalles@gempe.dev'),
    new Aluno(1, 'gêremias', 'geremias@bol.com.br'),
    new Aluno(2, 'Lisa', 'lisa@outlook.com'),
    new Aluno(3, 'Marival', 'marival@gmail.com')
  ];

  getAlunos() {
    console.log(this.alunos);
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
