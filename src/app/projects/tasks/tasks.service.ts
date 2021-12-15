import {Injectable} from "@angular/core";
import {exhaustMap, map, take} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";
import {AuthService} from "../../auth/auth.service";
import {ToastrService} from "ngx-toastr";

@Injectable({providedIn: "root"})
export class TasksService {

    constructor(private authService: AuthService, private httpClient: HttpClient, private toastService: ToastrService) {
    }

    retrieve(projectId: string) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                const params = {
                    project_id: projectId
                }
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey);

                return this.httpClient.post<any>(
                    environment.BASE_URL + "/tasks",
                    params,
                    {
                        headers
                    })
            }),
            map(response => {
                let data = this.handleResponse(response);
                if (data) {
                    return data;
                }
            }))
    }

    saveTask(title: string, summary: string, status: string, startDate: Date, endDate: Date, priority: string, projectId: string) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey)
                const params = {
                    title: title,
                    summary: summary,
                    status: status,
                    start_date: startDate,
                    end_date: endDate,
                    priority: priority,
                    project_id: projectId
                }

                return this.httpClient.post(
                    environment.BASE_URL + "/tasks/create",
                    params,
                    {
                        headers
                    })
            }))
    }

    onDeleteTask(taskId: string){

        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey)
                return this.httpClient.delete(environment.BASE_URL + "/projects/delete/" + taskId , {headers});
            }))

    }

    private handleResponse(response: any) {
        if (response.success) {
            return response.data
        } else {
            this.toastService.success(response.message);
            return null;
        }
    }
}