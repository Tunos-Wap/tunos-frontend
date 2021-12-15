import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {take, exhaustMap, map} from "rxjs/operators"

import {environment} from "src/environments/environment.prod";
import {AuthService} from "../auth/auth.service";
import {ToastrService} from "ngx-toastr";

@Injectable({providedIn: "root"})
export class ProjectService {

    constructor(private httpClient: HttpClient, private authService: AuthService, private toastService: ToastrService) {

    }

    retrieve() {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey)
                return this.httpClient.get<any>(environment.BASE_URL + "/projects", {'headers': headers});
            }),
            map(response => {
                let data = this.handleResponse(response);
                if (data) {
                    return data;
                }
            }))
    }

    saveProject(title: string, description: string, status: string, startDate: Date, endDate: Date) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey)
                const params = {
                    friendly_id: "friendly",
                    title: title,
                    description: description,
                    status: status,
                    start_date: startDate,
                    end_date: endDate,
                    user_id: user!.id
                }

                return this.httpClient.post(
                    environment.BASE_URL + "/projects/create",
                    params,
                    {
                        headers
                    })
            }))
    }

    onDeleteProject(projectId: string){

        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey)
                return this.httpClient.delete(environment.BASE_URL + "/projects/delete/" + projectId , {headers});
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