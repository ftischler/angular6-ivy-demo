import {
  Component,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType
} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<p>Hello {{world}}</p>`
})
export class HelloWorld {
  world = 'world';
}

renderComponent(HelloWorld as ComponentType<HelloWorld>);
