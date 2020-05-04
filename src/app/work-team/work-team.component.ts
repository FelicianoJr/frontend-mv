import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { EmployeeService } from "../service/employee.service";
import { EstablishmentService } from "../service/establishment.service";
import { Observable } from "rxjs";
import { Employee } from "../model/Employee";
import { Establishment } from "../model/Establishment";
import { WorkTimeService } from "../service/work-time.service";
import { CreateWorkTeam } from "../model/CreateWorkTeam";
import { Location } from '@angular/common';

@Component({
  selector: "app-work-team",
  templateUrl: "./work-team.component.html",
 })
export class WorkTeamComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  employees: Employee[];
  establishments: Establishment[];
  createWork: CreateWorkTeam = { employeeId: "", establishmentId: "" };

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private establishmentService: EstablishmentService,
    private workTeamService: WorkTimeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loadEmployee();
    this.loadEstablishment();
  }

  loadEmployee() {
    this.employeeService.listAll().subscribe((result) => {
      this.employees = result;
    });
  }

  loadEstablishment() {
    this.establishmentService.listAll().subscribe((result) => {
      this.establishments = result;
    });
  }

  changeEmployee(e) {
    this.createWork.employeeId = e.target.value;
  }

  changeEstablishment(e) {
    this.createWork.establishmentId = e.target.value;
  }

  onSubmit() {
    
    if (this.createWork) {
      this.workTeamService.save(this.createWork).subscribe((success) => {
        this.location.back();
      });
    } 
  }
}
