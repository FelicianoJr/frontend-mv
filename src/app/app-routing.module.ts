import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { EstablishmentComponent } from "./establishment/establishment.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EstablishmentListComponent } from "./establishment-list/establishment-list.component";
import { WorkTeamComponent } from "./work-team/work-team.component";
import { WorkTimeListComponent } from './work-time-list/work-time-list.component';

const routes: Routes = [
  { path: "", component: EmployeeListComponent },

  {
    path: "employee-list",
    component: EmployeeListComponent,
  },
  {
    path: "employee",
    component: EmployeeComponent,
  },
  {
    path: "edit-employee/:id",
    component: EmployeeComponent,
  },
  {
    path: "employee-list/edit-employee/:id",
    component: EmployeeComponent,
  },
  {
    path: "establishment-list",
    component: EstablishmentListComponent,
  },
  {
    path: "establishment",
    component: EstablishmentComponent,
  },
  {
    path: "establishment-list/edit-establishment/:id",
    component: EstablishmentComponent,
  },
  {
    path: "work-team",
    component: WorkTeamComponent,
  },
  {
    path: "work-team-list",
    component: WorkTimeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
