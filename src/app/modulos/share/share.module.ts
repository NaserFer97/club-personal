import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/utils/auth-error.interceptor';
import { getDutchPaginatorIntl } from 'src/app/dutch-paginator-intl';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthInterceptor } from 'src/app/utils/auth.interceptor';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxSpinnerModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }
  ],
})
export class ShareModule { }
