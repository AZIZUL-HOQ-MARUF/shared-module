import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeeComponent } from "./components/employee.component";
import {SharedModule} from '../../shared/module/shared.module';
import { EmpRoutingModule } from "./emp-routing.module";

@NgModule({
  imports: [CommonModule,SharedModule,EmpRoutingModule],
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent]
})
export class EmployeeModule {}
