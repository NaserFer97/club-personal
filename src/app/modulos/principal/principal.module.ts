import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SidebarMenuModule,
    ShareModule
  ]
})
export class PrincipalModule { }
