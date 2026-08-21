import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
   imports: [RouterOutlet],
   selector: 'fi-root',
   styles: [],
   template: `
      <router-outlet />
   `,
})
export class App {}
