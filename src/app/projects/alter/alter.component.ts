import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../projects.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-alter',
    templateUrl: './alter.component.html',
    styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {

    project = {title: "", description: "", startDate: new Date(), endDate: new Date(), status: ""}

    constructor(private projectService: ProjectService, private router: Router, private toastService: ToastrService) {
    }

    ngOnInit(): void {
    }

    saveProject() {
        this.projectService
            .saveProject(this.project.title, this.project.description, this.project.status, this.project.startDate, this.project.endDate)
            .subscribe(projectResponse => {
                this.toastService.success("Added new Project");
                this.router.navigate(["/projects"]);
            })
    }

}
