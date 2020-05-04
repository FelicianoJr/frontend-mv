import { Component, OnInit } from "@angular/core";
import { WorkTimeService } from "../service/work-time.service";
import { WorkTeam } from "../model/WorkTeam";
import { Observable } from "rxjs";

@Component({
  selector: "app-work-time-list",
  templateUrl: "./work-time-list.component.html",
})
export class WorkTimeListComponent implements OnInit {
  constructor(private service: WorkTimeService) {}

  workTeam$: Observable<WorkTeam[]>;

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.workTeam$ = this.service.listAll();
  }
}
