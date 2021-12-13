import { Component, OnInit } from '@angular/core';
import { ProjectService } from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    pageLoading = true;
    projects : any;
    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.projectService.retrieve().subscribe(list => {
            this.projects = list;
            this.pageLoading = false;
        })
    }
}
