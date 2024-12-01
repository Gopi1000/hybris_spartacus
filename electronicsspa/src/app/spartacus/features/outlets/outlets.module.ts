import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemooutletComponent } from './demooutlet/demooutlet.component';
import { OutletRefModule } from '@spartacus/storefront';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { ProductviewComponent } from './productview/productview.component';
import { CustomcarouselComponent } from './customcarousel/customcarousel.component';

@NgModule({
  declarations: [DemooutletComponent, ProductviewComponent, CustomcarouselComponent],
  imports: [CommonModule, OutletRefModule, UrlModule, RouterModule],
  exports: [DemooutletComponent, ProductviewComponent, CustomcarouselComponent]
})
export class OutletsModule { }
