import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[] | undefined;
  pagina: any;
  inscricao: Subscription = new Subscription;


  constructor(private cursosService: CursosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/cursos'], {queryParams: {'pagina': this.pagina++}});
  }

  prevPage() {
    this.router.navigate(['/cursos'], {queryParams: {'pagina': this.pagina--}});
  }

}
