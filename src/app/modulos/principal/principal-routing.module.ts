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
import { EventosCrearComponent } from './eventos/eventos/eventos/eventos-crear/eventos-crear/eventos-crear.component';
import { TipoEventoCrearComponent } from './eventos/tipo-evento/tipo-evento/tipo-evento-crear/tipo-evento-crear/tipo-evento-crear.component';
import { CarteleraCrearComponent } from './eventos/carteleras/cartelera/cartelera-crear/cartelera-crear/cartelera-crear.component';
import { ProductosComponent } from './productos/productos/productos/productos.component';
import { ProductosCrearComponent } from './productos/productos/productos/productos-crear/productos-crear/productos-crear.component';
import { PromocionesComponent } from './productos/promociones/promociones/promociones.component';
import { PromocionesCrearComponent } from './productos/promociones/promociones/promociones-crear/promociones-crear/promociones-crear.component';
import { AgenciasEntregaComponent } from './premios-tangibles/agencias-entrega/agencias-entrega/agencias-entrega.component';
import { AltaPremioComponent } from './premios-tangibles/alta-premio/alta-premio/alta-premio.component';
import { BajaPremioComponent } from './premios-tangibles/baja-premio/baja-premio/baja-premio.component';
import { EntregarPremioComponent } from './premios-tangibles/entregar-premio/entregar-premio/entregar-premio.component';
import { ReposicionStockComponent } from './premios-tangibles/reposicion-stock-deposito/reposicion-stock/reposicion-stock.component';
import { StockPremiosComponent } from './premios-tangibles/stock-premios/stock-premios/stock-premios.component';
import { TrazabilidadProductosComponent } from './premios-tangibles/trazabilidad-productos/trazabilidad-productos/trazabilidad-productos.component';
import { AgenciasCrearComponent } from './premios-tangibles/agencias-entrega/agencias-entrega/agencias-crear/agencias-crear/agencias-crear.component';
import { ResumenCanjesComponent } from './resumen-canjes/resumen-canjes/resumen-canjes.component';
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
      { path: 'eventos/crear', component: EventosCrearComponent },
      { path: 'eventos/tipo-evento-crear', component: TipoEventoCrearComponent },
      { path: 'eventos/cartelera-crear', component: CarteleraCrearComponent },
      { path: 'productos/productos', component: ProductosComponent },
      { path: 'productos/productos-crear', component: ProductosCrearComponent },
      { path: 'productos/promociones', component: PromocionesComponent },
      { path: 'productos/promociones-crear', component: PromocionesCrearComponent },
      { path: 'premios-tangibles/agencias-entrega', component: AgenciasEntregaComponent },
      { path: 'premios-tangibles/alta-premio', component: AltaPremioComponent },
      { path: 'premios-tangibles/baja-premio', component: BajaPremioComponent },
      { path: 'premios-tangibles/entrgar-premio', component: EntregarPremioComponent },
      { path: 'premios-tangibles/reposicion-stock', component: ReposicionStockComponent },
      { path: 'premios-tangibles/stock-premios', component: StockPremiosComponent },
      { path: 'premios-tangibles/trazabilidad-productos', component: TrazabilidadProductosComponent },
      { path: 'premios-tangibles/agencias-crear', component: AgenciasCrearComponent },
      { path: 'resumen-canjes', component: ResumenCanjesComponent },



      
      
      

      
      

      

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
