import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor( private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((response: any) => {
        if (response.ok && response.status === 200){
          if (!response.body){
            return throwError(response);
          }
        }
        return response;
      }),
      catchError(err => {
      
      if (err.status === 401) {
        this.router.navigate(['auth/login', {}]);
      }
      return throwError(err);
    }));
  }
}
