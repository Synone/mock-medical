import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const declarations = [AppComponent, LayoutComponent];

@NgModule({
  declarations: [...declarations],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: RequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
