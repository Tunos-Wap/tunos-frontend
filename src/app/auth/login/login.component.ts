import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = { email: "", password: "" };

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    getLogin() {
        // this.authService.user.next(new User("kCHoksi", "Kunj", "Choksi", "123", "kEma@fedw.ewd", "dwsdqxwsdwe"));
        this.authService
            .login(this.credentials.email, this.credentials.password)
            .subscribe(successLogin => {
                this.router.navigateByUrl("/projects");
            }, (error) => {
                console.log(error);
            })
    }

}
