import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private baseURL=`http://localhost:8080/api/v1`;
  constructor(private httpClient: HttpClient) { }

  getEmployee(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/getEmployee/${id}`);
  }

  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/allemployees`);
  }

  addEmployee (employees : Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addemployee`,employees);
  }

  
  updateEmployee(id:number, employee : Employee): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/updateemployee/${id}`, employee);
  }
}
