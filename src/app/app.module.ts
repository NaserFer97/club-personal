import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './modulos/share/share.module';
import { TranslocoRootModule } from './modulos/transloco-root/transloco-root.module';
import { GsformatPipe } from './pipes/gsformat.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemoveRequiredAsteriskDirective } from './remove-required-asterisk.directive';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    GsformatPipe,
    RemoveRequiredAsteriskDirective,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    TranslocoRootModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CommonModule,
    MatDialogModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
