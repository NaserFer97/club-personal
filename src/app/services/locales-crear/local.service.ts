import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject,} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private apiUrl = environment.apiUrl + '/locales';
  constructor(private http: HttpClient) {}
  private updatedLocalSource = new BehaviorSubject<any>(null);
  updatedLocal$: Observable<any> = this.updatedLocalSource.asObservable();

  createLocal(localData: any): Observable<any> {
    console.warn('Recuerda actualizar la apiUrl en los archivos de entorno cuando esté disponible');
    // return this.http.post<any>(this.apiUrl, localData); // Descomentar  con  la URL real de la API
    return of({ success: true }); // Retornar un valor temporal mientras la apiUrl no esté disponible
  }

  updateLocal(localId: string, formData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${localId}`, formData);
  }
  updateLocalInView(local: any) {
    this.updatedLocalSource.next(local);
  }
  
}
