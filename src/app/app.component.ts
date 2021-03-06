import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        let isLoggedIn: boolean = this.authService.autoLogin();
        if (!isLoggedIn && this.router.url != "/") {
            this.router.navigate(["/login"]);
        }
    }
}
