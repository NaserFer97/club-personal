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
import { NgxSpinnerModule } from 'ngx-spinner';
import { LocalesRubrosComponent } from './locales/locales-rubros/locales-rubros.component';
import { RubrosCrearComponent } from './locales/locales-rubros/rubros-crear/rubros-crear.component';
import { LocalesListasComponent } from './locales/locales-listas/locales-listas.component';
import { ListasCrearComponent } from './locales/locales-listas/listas-crear/listas-crear/listas-crear.component';
import { ListasBeneficiosComponent } from './locales/locales-listas/listas-crear/listas-crear/listas-beneficios/listas-beneficios.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { LocalesBeneficiosComponent } from './locales/locales-beneficios/locales-beneficios/locales-beneficios.component';
import { SalasDeCineComponent } from './cines/salas-de-cine/salas-de-cine.component';
import { PeliculasComponent } from './cines/peliculas/peliculas.component';
import { ImportarCarteleraComponent } from './cines/importar-cartelera/importar-cartelera.component';
import { SalasDeCineCrearComponent } from './cines/salas-de-cine/salas-de-cine-crear/salas-de-cine-crear/salas-de-cine-crear.component';
import { PeliculasCrearComponent } from './cines/peliculas/peliculas-crear/peliculas-crear.component';
import { CarteleraComponent } from './eventos/carteleras/cartelera/cartelera.component';
import { EventosComponent } from './eventos/eventos/eventos/eventos.component';
import { TipoEventoComponent } from './eventos/tipo-evento/tipo-evento/tipo-evento.component';
import { EventosCrearComponent } from './eventos/eventos/eventos/eventos-crear/eventos-crear/eventos-crear.component';
import { TipoEventoCrearComponent } from './eventos/tipo-evento/tipo-evento/tipo-evento-crear/tipo-evento-crear/tipo-evento-crear.component';
import { CarteleraCrearComponent } from './eventos/carteleras/cartelera/cartelera-crear/cartelera-crear/cartelera-crear.component';





@NgModule({
  declarations: [
    InicioComponent,
    DashboardComponent,
    LocalesAdheridosComponent,
    LocalesCrearComponent,
    LocalesRubrosComponent,
    RubrosCrearComponent,
    LocalesListasComponent,
    ListasCrearComponent,
    ListasBeneficiosComponent,
    LocalesBeneficiosComponent,
    SalasDeCineComponent,
    PeliculasComponent,
    ImportarCarteleraComponent,
    SalasDeCineCrearComponent,
    PeliculasCrearComponent,
    CarteleraComponent,
    EventosComponent,
    TipoEventoComponent,
    EventosCrearComponent,
    TipoEventoCrearComponent,
    CarteleraCrearComponent,
    
    
    
    
    
  
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
    NgxSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatListModule,
    MatButtonModule
  ]
})
export class PrincipalModule { }
