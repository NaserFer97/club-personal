import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { LocalesAdheridosComponent } from './locales/locales-adheridos/locales-adheridos.component';
import { LocalesCrearComponent } from './locales/locales-adheridos/locales-crear/locales-crear.component';
import { LocalesRubrosComponent } from './locales/locales-rubros/locales-rubros.component';
import { RubrosCrearComponent } from './locales/locales-rubros/rubros-crear/rubros-crear.component';
import { LocalesListasComponent } from './locales/locales-listas/locales-listas.component';
import { ListasCrearComponent } from './locales/locales-listas/listas-crear/listas-crear/listas-crear.component';
import { ListasBeneficiosComponent } from './locales/locales-listas/listas-crear/listas-crear/listas-beneficios/listas-beneficios.component';
import { LocalesBeneficiosComponent } from './locales/locales-beneficios/locales-beneficios/locales-beneficios.component';
import { SalasDeCineComponent } from './cines/salas-de-cine/salas-de-cine.component';
import { PeliculasComponent } from './cines/peliculas/peliculas.component';
import { SalasDeCineCrearComponent } from './cines/salas-de-cine/salas-de-cine-crear/salas-de-cine-crear/salas-de-cine-crear.component';
import { PeliculasCrearComponent } from './cines/peliculas/peliculas-crear/peliculas-crear.component';
import { ImportarCarteleraComponent } from './cines/importar-cartelera/importar-cartelera.component';
import { EventosComponent } from './eventos/eventos/eventos/eventos.component';
import { TipoEventoComponent } from './eventos/tipo-evento/tipo-evento/tipo-evento.component';
import { CarteleraComponent } from './eventos/carteleras/cartelera/cartelera.component';
const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'locales-adheridos', component: LocalesAdheridosComponent },
      { path: 'locales/crear', component: LocalesCrearComponent},
      { path: 'locales/editar/:id', component: LocalesCrearComponent },
      { path: 'locales-rubros', component: LocalesRubrosComponent },
      { path: 'rubros/crear', component: RubrosCrearComponent },
      { path: 'locales-listas', component: LocalesListasComponent },
      { path: 'listas/crear', component: ListasCrearComponent },
      { path: 'listas-beneficios', component: ListasBeneficiosComponent },
      { path: 'locales-beneficios', component: LocalesBeneficiosComponent },
      { path: 'salas-de-cine', component: SalasDeCineComponent },
      { path: 'peliculas', component: PeliculasComponent },
      { path: 'salas-de-cine-crear', component: SalasDeCineCrearComponent },
      { path: 'peliculas-crear', component: PeliculasCrearComponent },
      { path: 'importar-cartelera', component: ImportarCarteleraComponent },
      { path: 'eventos/tipo-evento', component: TipoEventoComponent },
      { path: 'eventos/eventos', component: EventosComponent },
      { path: 'eventos/cartelera', component: CarteleraComponent },
      
      
      

      
      

      

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
