import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputPasswordModule } from 'primeng/inputpassword';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { LabelModule } from 'primeng/label';
import { ButtonDirective } from 'primeng/button';

@Component({
   imports: [IftaLabelModule, InputTextModule, InputPasswordModule, IconFieldModule, InputIconModule, CommonModule, CheckboxModule, LabelModule, ButtonDirective],
   selector: 'fi-login',
   template: `
   @let mask = $mask();

   <section class="w-full h-dvh flex flex-col items-center justify-start">
      <div class="w-full gap-8 grid grid-cols-2 grid-rows-1 flex-auto px-8 pt-8">
         <div class="border border-black/30 rounded-xl py-12 px-24 flex flex-col items-start justify-between">
            <div class="flex flex-col">
               <h1 class="text-4xl text-second font-bold">Bienvenido a Crédito Motiva</h1>
               <span class="text-sm text-main ">Plataforma administrativa y acceso de clientes</span>
            </div>

            <form class="flex flex-col w-full gap-3">
               <h2 class="w-full text-2xl text-second">Inicio de sesión</h2>

               <p-iftalabel class="w-full">
                  <input pInputText id="username" type="text" autocomplete="off" [fluid]="true" />
                  <label for="username">Nombre de usuario</label>
               </p-iftalabel>

               <p-iftalabel class="w-full">
                  <p-iconfield>
                     <input pInputPassword [fluid]="true" [(mask)]="$mask"/>
                     <p-inputicon
                        (click)="$mask.set(!mask)"
                        class="cursor-pointer -translate-y-1/2"
                        [ngClass]="{
                           'bx bx-eye': mask,
                           'bx bx-eye-slash': !mask
                        }" />
                  </p-iconfield>
                  <label for="password">Contraseña</label>
               </p-iftalabel>

               <div class="flex gap-2">
                  <p-checkbox id="save-session" [binary]="true" />
                  <label pLabel for="save-session" class="text-sm">Recordar contraseña</label>
               </div>

               <button pButton class="bg-contrast! w-fit px-6! ml-auto">Entrar</button>
            </form>

            <ul class="flex flex-col gap-1 [&>li]:flex [&>li]:items-center [&>li]:justify-content [&>li]:gap-2 [&_i]:text-main [&_i]:text-xl [&_span]:text-main">
               <li>
                  <i class="bx bx-envelope-alt"></i>
                  <span>{{"example@gmail.com"}}</span>
               </li>
               <li>
                  <i class="bx bx-phone"></i>
                  <span>{{"772 000 9090"}}</span>
               </li>
            </ul>
         </div>

         <div class="h-full w-full relative overflow-hidden rounded-xl">
            <img src="/assets/pictures/picture-01.jpg" class="absolute z-[1] w-full h-full object-cover">
            <div class="absolute top-0 left-0 w-full h-full bg-black/30 z-[2]"></div>
            <div class="z-[3] absolute top-1/2 left-1/2 px-4 py-3 bg-white -translate-y-1/2 -translate-x-1/2 rounded-xl">
               <img src="/assets/icons/logo.svg" class="h-26">
            </div>
         </div>
      </div>
      <p class="w-full flex items-center justify-center gap-1 text-main h-12">
         Hecho por <b>FromIndustries</b>
      </p>
   </section>`,
})
export class Login {
   public $mask: WritableSignal<boolean> = signal(false);
}
