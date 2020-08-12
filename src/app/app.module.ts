import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { DefaultModule } from 'src/app/layout/default/default.module';

import { AuthInterceptor } from './auth/authconfig.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { TestComponent } from './pages/test/test.component';
import { LoginComponent } from './pages/login/login.component';
@NgModule({
  declarations: [AppComponent, TestComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
