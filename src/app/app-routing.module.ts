import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from './app.component'
import { AuthGuard } from "./core/AuthGuard";
import { HelloComponent } from "./hello.component";
const routes: Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  { path: "home", canActivate:[AuthGuard], component: HelloComponent },
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  // {path : "emp",canActivate:[AuthGuard], loadChildren: './featured/employee/employee.module#EmployeeModule'},
  {path : "emp",canActivate:[AuthGuard], loadChildren: ()=>import('src/app/featured/employee/employee.module').then(m=>m.EmployeeModule)},
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule {}
