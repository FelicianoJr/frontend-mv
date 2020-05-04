import { Component, OnInit } from "@angular/core";
import { EstablishmentService } from "../service/establishment.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Establishment } from "../model/Establishment";
import { Observable } from "rxjs";

@Component({
  selector: "app-establishment-list",
  templateUrl: "./establishment-list.component.html",
})
export class EstablishmentListComponent implements OnInit {
  constructor(
    private service: EstablishmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  establishment$: Observable<Establishment[]>;

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.establishment$ = this.service.listAll();
  }

  onEdite(id) {
    this.router.navigate(["edit-establishment", id], {
      relativeTo: this.route,
    });
  }

  onDelete(establishment) {
    if (confirm("Confirma a exclusão?")) {
      this.service.remove(establishment.id).subscribe((sucess) => {
        this.onRefresh();
      });
    }
  }
}
