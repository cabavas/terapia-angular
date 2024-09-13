import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "patients", component: PatientsComponent },
    { path: "sessions", component: SessionsComponent },
    { path: "reports", component: ReportsComponent },
    { path: "profile", component: ProfileComponent },
    {path: '**', redirectTo: ''},
];
