import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  public success: Subject<string> = new Subject();
  public info: Subject<string> = new Subject();
  public error: Subject<string> = new Subject();

  constructor() { }

}
