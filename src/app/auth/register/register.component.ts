import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @ViewChild("registerForm", { static: false }) registerForm: NgForm;

    constructor(
        private authService: AuthService,
        private toastService: ToastrService,
        private router: Router) {

    }

    ngOnInit(): void { }

    getRegister(form: NgForm) {
        const formValues = form.value;
        this.authService
            .register(
                formValues.firstName,
                formValues.lastName,
                formValues.username,
                formValues.email,
                formValues.password,
                formValues.phoneNumber
            )
            .subscribe(response => {
                this.toastService.success(response.msg + "\n Please login to continue");
                this.router.navigateByUrl("/login");
            }, (errorObj => {
                this.toastService.error(errorObj.error.msg)
            }))
    }
}
