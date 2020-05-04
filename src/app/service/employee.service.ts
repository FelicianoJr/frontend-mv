import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/Employee';

import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API = `${environment.API}${environment.BASE_URL}employee`;
  constructor(private http: HttpClient) {}

  listAll() {
    return this.http.get<Employee[]>(`${this.API}/all`);
  }

  findById(id) {
    return this.http.get<Employee>(`${this.API}/${id}`).pipe(take(1));
  }

  save(employee) {
    return this.http.post(this.API, employee).pipe(take(1));
  }

  update(employee) {
    return this.http.put(`${this.API}/${employee.id}`, employee).pipe(take(1));
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}