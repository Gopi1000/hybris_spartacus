import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page/static-page.component';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { staticRoutes } from './static-page/static-route';



@NgModule({
  declarations: [
    StaticPageComponent
  ],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule.forChild(staticRoutes)
  ]
})
export class CustomRoutingModule { }
