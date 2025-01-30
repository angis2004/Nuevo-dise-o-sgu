import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { IconosService } from '../services/iconos.service';
import { RouterModule } from '@angular/router';
//import { IconosService } from './services/iconos.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    MatIconModule,
    ReactiveFormsModule
  ]
})

export class AppModule {}
