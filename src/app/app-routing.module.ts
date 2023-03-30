import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalesCrearComponent } from './modulos/principal/locales/locales-adheridos/locales-crear/locales-crear.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  {
    path: '',
    loadChildren: () => import('./modulos/principal/principal.module').then(m => m.PrincipalModule)
  },
  {
    path: 'locales/crear', component: LocalesCrearComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
