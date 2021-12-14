import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./profile.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user = {firstName: "", email: "", lastName: "", phoneNumber: ""}
    loading = true;

    constructor(private profileService: ProfileService, private toastService: ToastrService, private router: Router) {
    }

    ngOnInit(): void {
        this.profileService.retrieve().subscribe(user => {
            if (user) {
                this.user.email = user.email;
                this.user.firstName = user.first_name;
                this.user.lastName = user.last_name;
                this.user.phoneNumber = user.phone_number;
            }
            this.loading = false;
        })
    }

    updateProfile() {
        this.profileService
            .update(this.user.email, this.user.firstName, this.user.lastName, this.user.phoneNumber)
            .subscribe(() => {
                this.toastService.success("Updated User Profile");
                this.router.navigate(["projects"]);
            })
    }

}
