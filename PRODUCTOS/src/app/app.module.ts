import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PrincipalComponent } from './components/principal/principal/principal.component';
import { LoginComponent } from './components/principal/login/login.component';
import { AdministrarProductosComponent } from './components/menu/administrar-productos/administrar-productos.component';
import { MenuComponent } from './components/menu/menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    AdministrarProductosComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
