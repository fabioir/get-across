import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule, LayoutPipe } from '@get-across-app/shared';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialImports = [BrowserAnimationsModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule];

const pipes = [LayoutPipe];

@NgModule({
  declarations: [AppComponent, PrincipalComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, materialImports, SharedModule],
  providers: [pipes],
  bootstrap: [AppComponent]
})
export class AppModule {}
