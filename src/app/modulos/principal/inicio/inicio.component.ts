import { Component, OnInit } from '@angular/core';
import { Modes as SidebarModes } from 'angular-sidebar-menu';
import { TranslocoService } from '@ngneat/transloco';
import { Roles } from 'src/app/common/roles.enum';
import { Router } from '@angular/router';
import { ACCESO_KEY, getData, USER_KEY } from 'src/app/config/constants';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MenuConfService } from 'src/app/services/menu-conf.service';
import { AuthService } from 'src/app/services/auth.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  title = 'angular-sidebar-menu';
  roles = Roles;
  currentRole = Roles.EDITOR;
  sidebarModes = SidebarModes;
  currentSidebarMode = SidebarModes.EXPANDED;
  lang = this.translationService.getDefaultLang();
  currentSearch?: string;
  inputSearchFocus = false;
  mainNavigationOpened = true;
  isLogin: any = true;
  ultimo_acceso: any = null;
  user: any = {
    nombreCompleto:"Matias Ros"
  };
  isMobile = false;
  constructor(private deviceService: DeviceDetectorService,private notificationService:NotificacionesService, private router: Router, private translationService: TranslocoService, public menuConfService: MenuConfService, private authService: AuthService) { 
    this.isMobile = this.deviceService.isMobile();
    if(this.isMobile){
      this.mainNavigationOpened=false;
    }
   }

  ngOnInit(): void {

  }

  logout() {
    this.authService.salir().subscribe(
      (data: any) => {
        if (data.statusCode == 0) {
          this.router.navigate(["/auth/login"]);
        }
      },
      err => {
        this.notificationService.error.next(err.error.message);
      }
    );
  }

}
