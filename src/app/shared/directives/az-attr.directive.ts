import { ElementRef, Attribute, Directive } from '@angular/core';

@Directive({
  selector: '[az-attr]'
})
export class AzAttrDirective {
className: string;
  constructor(
    element: ElementRef,
    @Attribute("az-attr-class") className: string
  ) {
    element.nativeElement.classList.add(
      className || "bg-success",
      "text-white"
    );
  }

}