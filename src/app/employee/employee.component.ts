import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { EmployeeService } from "../service/employee.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
})
export class EmployeeComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.editForm();
  }

  editForm() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      if (id) {
        this.service.findById(params["id"]).subscribe((employee) => {
          this.loadForm(employee);
        });
      }
    });
  }

  loadForm(employee) {
    this.form = this.fb.group({
      id: employee.id,
      name: employee.name,
      address: employee.address,
    });
  }

  initForm() {
    this.form = this.fb.group({
      name: [""],
      address: [""],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.value.id) {
      this.service.update(this.form.value).subscribe((success) => {
        this.location.back();
      });
    } else {
      this.service.save(this.form.value).subscribe((success) => {
        this.location.back();
      });
    }
  }
}
