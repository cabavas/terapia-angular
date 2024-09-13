import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { MessagesComponent } from './pages/messages/messages.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path: "patients", component: PatientsComponent },
    { path: "sessions", component: SessionsComponent },
    { path: "reports", component: ReportsComponent },
    { path: "profile", component: ProfileComponent },
    { path: "schedule", component: ScheduleComponent },
    { path: "finance", component: FinanceComponent },
    { path: "messages", component: MessagesComponent },
    // {path: '**', redirectTo: ''},
];
