import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './modulos/share/share.module';
import { TranslocoRootModule } from './modulos/transloco-root/transloco-root.module';
import { GsformatPipe } from './pipes/gsformat.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GsformatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    TranslocoRootModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
