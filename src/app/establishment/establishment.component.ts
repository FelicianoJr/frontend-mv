import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { EstablishmentService } from "../service/establishment.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: "app-establishment",
  templateUrl: "./establishment.component.html",
 
})
export class EstablishmentComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: EstablishmentService,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {
    this.initForm();
    this.editForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [""],
      address: [""],
    });
  }

  editForm() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      if (id) {
        this.service.findById(params["id"]).subscribe((establishment) => {
          this.loadForm(establishment);
        });
      }
    });
  }

  loadForm(establishment) {
    this.form = this.fb.group({
      id: establishment.id,
      name: establishment.name,
      address: establishment.address
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
