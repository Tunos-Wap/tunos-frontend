import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
    //TODO check for below error of ! -- remove !
    // Property 'userSubscription' has no initializer and is not definitely assigned in the constructor. 
    userSubscription!: Subscription;
    isLoggedIn = false;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        this.userSubscription = this.authService.user.subscribe(user => {
            if (user) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        })
    }

    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }

    navigateToLogin() {
        this.router.navigate(["login"]);
    }

    navigateToRegister() {
        this.router.navigate(["register"]);
    }

    logout() {
        localStorage.clear();
        this.router.navigate(["/"]);
        this.authService.user.next(null);
    }
}
