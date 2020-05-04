import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Establishment } from '../model/Establishment';
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  private readonly API = `${environment.API}${environment.BASE_URL}establishment`;
  constructor(private http: HttpClient) {}

  listAll() {
    return this.http.get<Establishment[]>(`${this.API}/all`);
  }

  findById(id) {
    return this.http.get<Establishment>(`${this.API}/${id}`).pipe(take(1));
  }

  save(establishment) {
    return this.http.post(this.API, establishment).pipe(take(1));
  }

  update(establishment) {
    return this.http.put(`${this.API}/${establishment.id}`, establishment).pipe(take(1));
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
