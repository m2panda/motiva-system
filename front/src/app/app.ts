import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
   imports: [RouterOutlet, ToastModule],
   selector: 'fi-root',
   styles: [],
   template: `
      <p-toast />
      <router-outlet />
   `,
})
export class App {}
