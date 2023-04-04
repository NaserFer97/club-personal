import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private apiUrl = environment.apiUrl + '/locales';

  constructor(private http: HttpClient) {}

  createLocal(localData: any): Observable<any> {
    console.warn('Recuerda actualizar la apiUrl en los archivos de entorno cuando esté disponible');
    // return this.http.post<any>(this.apiUrl, localData); // Descomentar esta línea cuando tengas la URL real de la API
    return of({ success: true }); // Retornar un valor temporal mientras la apiUrl no esté disponible
  }
}
