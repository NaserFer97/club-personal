import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { LocalesAdheridosComponent } from './locales/locales-adheridos/locales-adheridos.component';
import { LocalesCrearComponent } from './locales/locales-adheridos/locales-crear/locales-crear.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'locales-adheridos', component: LocalesAdheridosComponent },
      {
        path: 'locales/crear', component: LocalesCrearComponent
      },
      { path: 'locales/editar/:id', component: LocalesCrearComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
