import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import {TasksService} from "../tasks.service";

@Component({
    selector: 'app-task-alter',
    templateUrl: './task-alter.component.html',
    styleUrls: ['./task-alter.component.css']
})
export class TaskAlterComponent implements OnInit {
    task = {title: "", summary: "", startDate: new Date(), endDate: new Date(), status: "", priority: ""}
    projectId: string = "";

    constructor(private taskService: TasksService, private router: Router, private toastService: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.projectId = params['projectId'];
        })
    }

    saveTask() {
        this.taskService
            .saveTask(this.task.title, this.task.summary, this.task.status, this.task.startDate, this.task.endDate, this.task.priority, this.projectId)
            .subscribe(() => {
                this.toastService.success("Added new Task");
                this.router.navigate(["projects", this.projectId, "tasks"]);
            })
    }
}
