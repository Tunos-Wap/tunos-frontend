import { Component, OnInit } from '@angular/core';
import {Project} from '../model/project.model';
import {ProjectRepository} from '../model/project.repository';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private repository: ProjectRepository) { }
  deleteProject(id: number) {
    this.repository.deleteProject(id+456);
}

  ngOnInit(): void {
  }

}
