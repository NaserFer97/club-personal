import { HttpErrorResponse, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private ngspinner: NgxSpinnerService,
    private router: Router) {

    this.ngspinner.show();
  }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    this.ngspinner.show();
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        this.ngspinner.hide();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('INTERCEPTOR ERROR', error.status, error);
        if (error.status == 401) {
          this.router.navigate(['/auth/login']);
        }
        this.ngspinner.hide();
        return throwError(error);
      }));


    return next.handle(authReq);
  }


}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];


