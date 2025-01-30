import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './main/principal/principal.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RowComponent } from './main/principal/row-table/row/row.component';
import { LoginComponent } from './auth/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
////


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SidebarComponent,
    RowComponent,
    LoginComponent
  ],
  imports: [
  //  AppRoutingModule,
    BrowserModule,
    RouterModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
