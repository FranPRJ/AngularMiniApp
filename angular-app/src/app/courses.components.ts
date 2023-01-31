import { Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
            <h2> {{titulo}}</h2>
            <ul>
                <li *ngFor="let cu of cursos">
                    {{cu}}
                </li>
            </ul>`
})

export class CoursesComponent{
    titulo = "Lista de cursos";
    cursos;

    constructor(service: CoursesService) {
        this.cursos = service.getCursos();
    }
}