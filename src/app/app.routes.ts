import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {EmployeeComponent} from "./components/employee/employee-register-time/employee.component";
import {RegistersComponent} from "./components/registers/registers.component";
import {NewEmployeeComponent} from "./components/employee/new-employee/new-employee.component";
import {SearchByDateComponent} from "./components/search-by-date/records/search-by-date.component";
import {OvertimeComponent} from "./components/search-by-date/overtime/overtime.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {EmployeeOptionsComponent} from "./components/employee/employee-options/employee-options.component";
import {EditEmployeeComponent} from "./components/employee/edit-employee/edit-employee.component";
import {DeleteEmployeeComponent} from "./components/employee/delete-employee/delete-employee.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'colaborador',
    component: EmployeeComponent,
     canActivate:[AuthGuardService]
  },
  {
    path: 'registros',
    component: RegistersComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'cadastrar',
    component: NewEmployeeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'registros/por-data',
    component: SearchByDateComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'registros/hora-extra',
    component: OvertimeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'opcao-colaborador',
    component: EmployeeOptionsComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'editar-colaborador',
    component: EditEmployeeComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'deletar-colaborador',
    component: DeleteEmployeeComponent,
    canActivate: [AuthGuardService]
  },
];
