import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarMenuModule } from 'angular-sidebar-menu';
import { ShareModule } from '../share/share.module';
import { LocalesAdheridosComponent } from './locales/locales-adheridos/locales-adheridos.component';
import { LocalesCrearComponent } from './locales/locales-adheridos/locales-crear/locales-crear.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoaderComponent } from './loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent,
    LocalesAdheridosComponent,
    LocalesCrearComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SidebarMenuModule,
    ShareModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    NgxSpinnerModule
  ]
})
export class PrincipalModule { }
