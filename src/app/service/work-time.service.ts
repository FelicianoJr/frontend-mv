import { Injectable } from '@angular/core';
import { WorkTeam } from '../model/WorkTeam';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService {
  private readonly API = `${environment.API}${environment.BASE_URL}work-team`;
  constructor(private http: HttpClient) {}

  listAll() {
    return this.http.get<WorkTeam[]>(`${this.API}/all`);
  }

  findById(id) {
    return this.http.get<WorkTeam>(`${this.API}/${id}`).pipe(take(1));
  }

  save(workTeam) {
    return this.http.post(this.API, workTeam).pipe(take(1));
  }

  update(workTeam) {
    return this.http.put(`${this.API}/${workTeam.id}`, workTeam).pipe(take(1));
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
