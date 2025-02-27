import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <div class="text-center">
    <h1>Hello {{name}}!</h1>
  </div>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
