import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AzAttrDirective } from '../directives/az-attr.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AzAttrDirective],
  exports:[
    AzAttrDirective
  ]
})
export class SharedModule { }