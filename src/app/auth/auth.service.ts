import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

import { User } from "./user.model";
import { environment } from "src/environments/environment";


@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    user = new BehaviorSubject<User | null>(null);

    login(email: string, password: string) {
        return this.httpClient.post(
            environment.BASE_URL + "/auth/login",
            {
                email: email,
                password: password
            }
        ).pipe(
            tap((response: any) => {
                this.emitLoggedInUser(response.userInfo, response.token);
            })
        )
    }

    register(firstName: string, lastName: string, username: string, email: string, password: string, phoneNumber: string) {
        return this.httpClient.post(
            environment.BASE_URL + "/auth/register",
            {
                first_name: firstName,
                last_name: lastName,
                username: username,
                phone_number: phoneNumber,
                email: email,
                password: password
            }
        ).pipe(
            tap((response: any) => {
                this.emitLoggedInUser(response.userInfo, response.token);
            })
        )
    }

    autoLogin() {
        let loggedInUser: User = JSON.parse(localStorage.getItem("user") || '{}');

        if (Object.keys(loggedInUser).length == 0) {
            return false;
        }

        let newUser = new User(loggedInUser.id, loggedInUser.username, loggedInUser.email, loggedInUser.firstName,
            loggedInUser.lastName, loggedInUser.phoneNumber, loggedInUser.apiKey);

        this.user.next(newUser);
        return true;
    }

    private emitLoggedInUser(userInfo: any, token: string) {
        const userResponse = new User(
            userInfo._id, userInfo.username, userInfo.email, userInfo.first_name,
            userInfo.last_name, userInfo.phone_number, token
        );

        this.user.next(userResponse);
        localStorage.setItem("user", JSON.stringify(userResponse));
    }
}