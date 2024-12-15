import { HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { CustomPdpModule } from "./custom-pdp/custom-pdp.module";
import { RouterModule } from "@angular/router";
import { UrlModule } from "@spartacus/core";
import { OutletRefModule } from "@spartacus/storefront";
import { OutletsModule } from "./spartacus/features/outlets/outlets.module";
import { CustomregisterComponent } from './customregister/customregister.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomregisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomPdpModule,
    OutletsModule,
    RouterModule,
    UrlModule,
    OutletRefModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [provideHttpClient(withFetch(), withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
