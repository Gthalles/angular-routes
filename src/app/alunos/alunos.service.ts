import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlunosService {
  private alunos: any[] = [
    {
      id: 1,
      name: 'Tobias',
      email: 'tobias@hotmail.com'
    },
    {
      id: 2,
      name: 'Leonéia',
      email: 'Ldgc@bol.gov'
    },
    {
      id: 3,
      name: 'Debora',
      email: 'Debora@outlook.com.br'
    }
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for(let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if(aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
