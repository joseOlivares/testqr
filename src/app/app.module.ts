import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angular2-qrcode';
import { ReaderComponent } from './components/reader/reader.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';
import { HomeComponent } from './components/home/home.component';


import {MatSelectModule} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

// QR Scanner
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    CodigoqrComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    ZXingScannerModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatCardModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
