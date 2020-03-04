import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from './app.component'
import { AuthGuardService } from "./core/AuthGuard.service";
import { HelloComponent } from "./hello.component";
const routes: Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  { path: "home", canActivate:[AuthGuardService], component: HelloComponent },
  // { path: "", redirectTo: "/home", pathMatch: "full" },
  {path : "emp",canActivate:[AuthGuardService], loadChildren: './featured/employee/employee.module#EmployeeModule'}
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule {}
