import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../auth/auth.service";
import {exhaustMap, map, take} from "rxjs/operators";
import {environment} from "../../environments/environment.prod";

@Injectable({providedIn: "root"})
export class ProfileService {

    constructor(private httpClient: HttpClient, private toastService: ToastrService, private authService: AuthService) {
    }

    retrieve() {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey);

                return this.httpClient.get<any>(
                    `${environment.BASE_URL}/users`,
                    {headers}
                )
            }),
            map(response => {
                let data = this.handleResponse(response);
                if (data) {
                    return data;
                }
            }))
    }

    update(email: string, firstName: string, lastName: string, phoneNumber: string) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                let headers = new HttpHeaders().set("Authorization", "bearer " + user!.apiKey);

                const params = {
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber
                }
                return this.httpClient.put<any>(
                    `${environment.BASE_URL}/users/update`,
                    params,
                    {headers}
                )
            }),
            map(response => {
                let data = this.handleResponse(response);
                if (data) {
                    return data;
                }
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