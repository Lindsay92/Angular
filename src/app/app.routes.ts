import { Routes } from "@angular/router";
import { AboutComponent } from "./routes/about/about.component";
import { ActivityListComponent } from "./routes/activity-list/activity-list.component";
import { HomeComponent } from "./routes/home/home.component";
import { LoginComponent } from "./routes/login/login.component";


export const ROUTES: Routes = [
    {path: 'activities', component: ActivityListComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]