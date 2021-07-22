import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import  Swal  from 'sweetalert2'; 



@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee : Employee = {employeeName:'', employeeEmailId:'',employeePhoneNumber:''}

  constructor( private service : EmployeeServiceService, private router : Router,private path : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.path.snapshot.params['id']
    this.service.getEmployeeById(id).subscribe((data) =>{this.employee =data} );
  }

  updateEmployee(){


    Swal.fire({  
      text: 'Press save to Change Employee Detail',  
      showCancelButton: true,  
      confirmButtonText: 'Save',  
      cancelButtonText: 'delete'  
    }).then((result) => {  
      if (result.value) { 

        this.service.updateEmployee(this.employee).subscribe((data)=> {
          this.router.navigate(['showAll']);
        },err => console.log(err))
    
      } else if(result.dismiss === Swal.DismissReason.cancel){

        Swal.fire({  
          text: 'Press save to Change Employee Detail',  
          showCancelButton: true,  
          confirmButtonText: 'yes',  
          cancelButtonText: 'no'  
        }).then((result) => {  
          if (result.value) { 

        const id = this.path.snapshot.params['id']
        this.service.removeEmployee(id).subscribe((result) =>{
          this.router.navigate(['showAll'])
        },err => console.log(err));
      } else result.dismiss === Swal.DismissReason.cancel

        })
      } 
    }) 

  }

}
