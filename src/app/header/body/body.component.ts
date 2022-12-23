import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  // cursos!: String[];

  cursos = ['JavaScript', 'C#', 'Curso'];


  addCurso(nombreC: String){
    this.cursos.push(String(nombreC));
  }

}
