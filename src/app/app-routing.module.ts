import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [

  {path : 'showAll' ,component : AllEmployeesComponent},
  {path : 'createEmployee' ,component : CreateEmployeeComponent},
  {path : 'updateEmployee/:id' ,component : UpdateEmployeeComponent},
  {path : '' ,component : AllEmployeesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
