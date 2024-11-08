import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfigModule, CmsConfig, provideConfig } from '@spartacus/core';
import {
  StarRatingModule,
  IconModule,
  LaunchDialogService,
  DIALOG_TYPE,
  LayoutConfig,
} from '@spartacus/storefront';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { CustomProductIntroComponent } from './custom-product-intro/custom-product-intro.component';
import { CustomProductSummaryComponent } from './custom-product-summary/custom-product-summary.component';
import { ReviewModelComponent } from './review-model/review-model.component';
import { FormErrorsModule } from '@spartacus/storefront';
import { CustomregisterComponent } from '../customregister/customregister.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomProductIntroComponent,
    CustomProductSummaryComponent,
    CustomComponentComponent,
    ReviewModelComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    FormErrorsModule,
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
        RegisterCustomerComponent: {
          component: CustomregisterComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
          slots: ['Section1', 'Section2A', 'Section2B', 'Section3', 'Section4'],
        },
      },
    } as LayoutConfig),
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
export class CustomPdpModule { }
