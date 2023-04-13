import { Component, OnInit } from '@angular/core';
import { TrazabilidadBeneficiosService } from 'src/app/services/locales/trazabilidad-beneficios/trazabilidad-beneficios.service';

@Component({
  selector: 'app-locales-beneficios',
  templateUrl: './locales-beneficios.component.html',
  styleUrls: ['./locales-beneficios.component.scss']
})
export class LocalesBeneficiosComponent implements OnInit {

  constructor(private TrazabilidadBeneficiosService: TrazabilidadBeneficiosService) { }

  ngOnInit(): void {
  }

}
