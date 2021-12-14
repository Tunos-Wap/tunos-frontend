import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ProfolioComponent } from './portfolio/profolio.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BtntopComponent } from './btntop/btntop.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './projects/tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { AlterComponent } from './projects/alter/alter.component';
import { TaskAlterComponent } from './projects/tasks/task-alter/task-alter.component';

@NgModule({
    declarations: [
        AppComponent,
        ServicesComponent,
        ProfolioComponent,
        AboutComponent,
        TestimonialComponent,
        ContactComponent,
        LoginComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        BtntopComponent,
        RegisterComponent,
        LandingComponent,
        TasksComponent,
        ProjectsComponent,
        AlterComponent,
        TaskAlterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        })
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
