import { Injectable } from '@angular/core';
import { TranslocoService, translate } from '@ngneat/transloco';
import { Menu } from 'angular-sidebar-menu';
import { BehaviorSubject } from 'rxjs';
import { Roles } from '../common/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class MenuConfService {
  private menu = new BehaviorSubject<Menu | undefined>(undefined);
  menu$ = this.menu.asObservable();

  constructor(private translationService: TranslocoService) {
    translationService.selectTranslate('').subscribe((e) => this.setMenu());
  }

  private setMenu(): void {
    const menu: Menu = [
      {
        id: 'INICIO',
        label: translate('INICIO'),
        route: '/',
        iconClasses: 'icon icon-inicio',
      },
      {
        id: 'LOCALES',
        label: this.translationService.translate('LOCALES'),
        iconClasses: 'icon icon-locales',
        children: [
          {
            id: 'LOCALES_ADHERIDOS',
            label: translate('LOCALES_ADHERIDOS'),
            route: '/locales-adheridos'
          },
          {
            id: 'RUBROS',
            label: translate('RUBROS'),
            route: '/locales-rubros'
          },
          {
            id: 'LISTAS',
            label: translate('Listas'),
            route: '/locales-listas'
          },
          {
            id: 'Trazabilidad Beneficios',
            label: translate('Beneficios'),
            route: '/locales-beneficios'
          }
          
        ],
      },
      {
        id: 'CINES',
        label: this.translationService.translate('CINES'),
        iconClasses: 'icon icon-cines',
        children: [
          {
            id: 'SALAS_DE_CINE',
            label: translate('Salas de cine'),
            route: '/salas-de-cine'
          },
          {
            id: 'PELICULAS',
            label: translate('Peliculas'),
            route: '/peliculas'
          },
          {
            id: 'IMPORTAR_CARTELERA',
            label: translate('Importar cartelera'),
            route: '/importar-cartelera'
          },

        ],
        
      },

      {
        id: 'EVENTOS',
        label: this.translationService.translate('EVENTOS'),
        iconClasses: 'icon icon-eventos',
        children: [
          {
            id: 'EVENTOS',
            label: translate('Eventos'),
            route: './eventos/eventos'
          },
          {
            id: 'TIPO_EVENTO',
            label: translate('Tipo de Evento'),
            route: './eventos/tipo-evento'
          },
          {
            id: 'CARTELERA',
            label: translate('Cartelera'),
            route: './eventos/cartelera'
          },

        ],
      },

      {
        id: 'PRODUCTOS',
        label: this.translationService.translate('PRODUCTOS'),
        iconClasses: 'icon icon-productos',
        children: [
          {
            id: 'PRODUCTOS',
            label: translate('Productos'),
            route: './productos/productos'
          },
          {
            id: 'PROMOCIONES',
            label: translate('Promociones'),
            route: './productos/promociones'
          }
        ],
      },
      {
        id: 'PREMIOS_TANGIBLES',
        label: this.translationService.translate('PREMIOS_TANGIBLES'),
        iconClasses: 'icon icon-premios',
        children: [

        ],
      },
      {
        id: 'RESUMEN_DE_CANJES',
        label: this.translationService.translate('RESUMEN_DE_CANJES'),
        children: [

        ],
      }
    ];

    this.menu.next(menu);
  }
}