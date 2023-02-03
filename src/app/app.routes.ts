import { Routes } from "@angular/router";
import { ActivityListComponent } from "./routes/activity-list/activity-list.component";
import { HomeComponent } from "./routes/home/home.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'activities', component: ActivityListComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
]