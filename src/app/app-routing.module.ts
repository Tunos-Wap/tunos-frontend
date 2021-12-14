import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './projects/tasks/tasks.component';
import { AlterComponent } from './projects/alter/alter.component';
import { TaskAlterComponent } from "./projects/tasks/task-alter/task-alter.component";

const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/alter', component: AlterComponent },
    { path: 'projects/alter/:id', component: AlterComponent },
    { path: 'projects/:id/tasks', component: TasksComponent },
    { path: 'tasks/:projectId/alter', component: TaskAlterComponent },
    { path: 'tasks/:projectId/alter/:id', component: TaskAlterComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ], declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
