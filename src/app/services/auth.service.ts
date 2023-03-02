import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servers } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginURL = Servers.CLUB.baseUrl + 'sesion/';
  
  constructor(private http: HttpClient) { }

  ingresar(body:any){
    return this.http.post(this.loginURL+"login",body, httpOptions);
  }

  salir(){
    return this.http.get(this.loginURL+"logout", httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};