import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angular2-qrcode';
import { ReaderComponent } from './components/reader/reader.component';
import { CodigoqrComponent } from './components/codigoqr/codigoqr.component';

import {MatSelectModule} from '@angular/material/select'
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';

// QR Scanner
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOption, MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    CodigoqrComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
