import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  // Vetor
  vetor:Curso[];

  // Objeto da classe curso
  curso = new Curso();

  constructor(
    private curso_service:CursoService

  ) { }

  ngOnInit() {
    // Ao iniciar o sistema
    this.selecao();
   }

  //Cadastro
  cadastro(): void {
    alert('Cadastro');
  }

  //Seleção
  selecao(): void {
    this.curso_service.obterCursos().subscribe(
      (res:Curso[])=>{
        this.vetor = res;
        console.log('Cursos', res);
        
      }
    )
  }

  //Seleção
  alterar(): void {
    alert('Alterar');
  }

  //Seleção
  remover(): void {
    alert('Remover');
  }

}
