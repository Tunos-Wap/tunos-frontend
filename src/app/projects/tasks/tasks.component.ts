import {Component, OnInit} from '@angular/core';
import {TasksService} from "./tasks.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    pageLoading = true;
    tasks: any;
    projectId: string = "";
    displayCompleted = false;

    constructor(private taskService: TasksService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.projectId = params['id'];
            this.taskService.retrieve(this.projectId).subscribe(list => {
                this.tasks = list;
                this.pageLoading = false;
            })
        })
    }

    deleteTask(_id: string) {
        if (confirm("Are you sure") == true) {
            this.taskService.onDeleteTask(_id).subscribe(()=>{
                let index = this.tasks.findIndex( (el:any) =>el._id == _id);
                if(index != -1){
                    this.tasks.splice(index, 1);
                }
                this.toastService.success("Task has been deleted succesfully");
            });
            
        }
    }

    shouldDisplay(task: any) {
        return this.displayCompleted || (!this.displayCompleted && task.status != "completed");
    }
}
