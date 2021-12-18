import {Component, OnInit} from '@angular/core';
import {ProjectService} from './projects.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {identifierModuleUrl} from '@angular/compiler';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    pageLoading = true;
    projects: any;

    constructor(private projectService: ProjectService, private router: Router, private toastService: ToastrService, private authService: AuthService) {
    }

    ngOnInit(): void {
        this.projectService.retrieve().subscribe(list => {
            this.projects = list;
            this.pageLoading = false;
        })
    }

    deleteProject(_id: string) {
        console.log(_id);
        if (confirm('Are you sure to delete this record ?') == true) {
            this.projectService.onDeleteProject(_id).subscribe(() => {

                let index = this.projects.findIndex((el: any) => el._id == _id);
                if (index != -1) {
                    this.projects.splice(index, 1);
                }
                this.toastService.success("Project has been deleted succesfully");
            });

        }
    }

    logout() {
        localStorage.clear();
        this.router.navigate(["/"]);
        this.authService.user.next(null);
    }
}
