import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule, CmsConfig, provideConfig } from '@spartacus/core';
import {
  StarRatingModule,
  IconModule,
  LaunchDialogService,
  DIALOG_TYPE,
} from '@spartacus/storefront';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { ReviewModelComponent } from './review-model/review-model.component';

@NgModule({
  declarations: [
    CustomProductIntroComponent,
    CustomProductSummaryComponent,
    CustomComponentComponent,
    ReviewModelComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    StarRatingModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent,
        },
        ProductSummaryComponent: {
          component: CustomProductSummaryComponent,
        },
        PageTitleComponent: {
          component: CustomComponentComponent,
        },
      },
    } as CmsConfig),
  ],

  providers: [
    LaunchDialogService,
    provideConfig({
      launch: {
        // Define configuration for the 'customDialog' key
        customDialog: {
          inline: true,
          component: ReviewModelComponent, // Component to launch
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
})
export class CustomPdpModule {}
