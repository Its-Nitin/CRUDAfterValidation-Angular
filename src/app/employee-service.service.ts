import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


const myheader=
{
  headers:new HttpHeaders({'Content-type' : 'application/json',
  'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET,PUT,POST,DELETE'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private http : HttpClient ) { }

  allEmployees(): Observable<Employee[]>{

    return this.http.get<Employee[]>("http://localhost:8070/allEmployees");

  }
  
  createEmployee(employee :Employee) : Observable<Employee>{

    return this.http.post<Employee>("http://localhost:8070/saveEmployee",employee,myheader);

  }
  
  removeEmployee(id : number) : Observable<Employee>{

    return this.http.delete<Employee>("http://localhost:8070/deleteEmployee/"+id,myheader);

  }
  
  updateEmployee(employee : Employee) : Observable<Employee>{

    return this.http.put<Employee>("http://localhost:8070/updateEmployee",employee,myheader);

  }
  getEmployeeById(id : Employee) : Observable<Employee>{

    return this.http.get<Employee>("http://localhost:8070/getEmployeeById/"+id);

  }

}
