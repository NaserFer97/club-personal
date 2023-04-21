import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servers } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ResumenCanjesService {
 
  private baseUrl = Servers.CLUB.baseUrl + "resumen-canjes";
  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    var url = this.baseUrl + "/listar";
    return this.http.get<any>(url);
  }

  crear(data:any){
    var url = this.baseUrl + "/crear";
    return this.http.post<any>(url,data);
  }

  editar(data:any,id:any){
    var url = this.baseUrl + "/editar/"+id;
    return this.http.put<any>(url,data);
  }

  eliminar(id:any){
    var url = this.baseUrl + "/eliminar/"+id;
    return this.http.delete<any>(url);
  }
}

