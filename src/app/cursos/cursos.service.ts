import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      {id: 1, name: 'Angular', teacher: 'Loiane', platform: 'You Tube'},
      {id: 2, name: 'Docker', teacher: 'Wesley', platform: 'Workshop'},
      {id: 3, name: 'SpringBoot', teacher: null, platform: 'algaworks'}
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for(let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if(curso.id == id) {
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
