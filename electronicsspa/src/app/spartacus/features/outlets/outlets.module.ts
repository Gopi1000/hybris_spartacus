import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemooutletComponent } from './demooutlet/demooutlet.component';
import { OutletRefModule } from '@spartacus/storefront';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DemooutletComponent],
  imports: [CommonModule, OutletRefModule, UrlModule, RouterModule],
  exports: [DemooutletComponent]
})
export class OutletsModule {}
