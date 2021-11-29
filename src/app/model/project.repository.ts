import { Injectable } from "@angular/core";
import { Project } from "../model/project.model";
import { RestDataSource } from "./rest.datasource";


@Injectable()
export class ProjectRepository {
    private projects: Project[] = [];

    constructor() {
        dataSource.getProjects().subscribe(data => {
            this.projects = data;
        });
    }

    
    deleteProject(id: number) {
        this.dataSource.deleteProduct(id).subscribe(p => {
            this.projects.splice(this.projects.
                findIndex(p => p.id == id), 1);
        })
    }
}