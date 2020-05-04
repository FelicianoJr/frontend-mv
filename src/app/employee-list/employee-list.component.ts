import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../service/employee.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Employee } from "../model/Employee";
import { Observable } from "rxjs";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private service: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  employee$: Observable<Employee[]>;

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.employee$ = this.service.listAll();
  }

  onEdit(id) {
    this.router.navigate(["edit-employee", id], { relativeTo: this.route });
  }

  onDelete(employee) {
    if (confirm("Confirma a exclusão?")) {
      this.service.remove(employee.id).subscribe((sucess) => {
        this.onRefresh();
      });
    }
  }
}
