import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { WorkTeamComponent } from './work-team/work-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EstablishmentListComponent } from './establishment-list/establishment-list.component';
import { WorkTimeListComponent } from './work-time-list/work-time-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EstablishmentComponent,
    WorkTeamComponent,
    EmployeeListComponent,
    EstablishmentListComponent,
    WorkTeamComponent,
    WorkTimeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
