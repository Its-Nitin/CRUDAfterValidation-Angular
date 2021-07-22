import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  allEmployees : any |undefined;
  constructor(private service : EmployeeServiceService ,private router : Router) { }

  ngOnInit(): void {

    this.getAllEmployees();
  }

  getAllEmployees(){
      this.service.allEmployees().subscribe(result =>{
        this.allEmployees = result;
      });
  }

  deleteEmployee(id : number){

    this.service.removeEmployee(id).subscribe((result) =>{
      this.getAllEmployees();
    },err => console.log(err));

  }

}
