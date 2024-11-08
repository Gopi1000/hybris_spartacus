import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureConfigService, Product, ProductScope, ProductService } from '@spartacus/core';
import { CmsComponentData, OutletPosition } from '@spartacus/storefront';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {
  constructor(private router: Router) { }

  // private featureConfigService: FeatureConfigService =
  //   inject(FeatureConfigService);
  // protected productSearchByCodeService: ProductSearchByCodeService = inject(
  //   ProductSearchByCodeService
  // );

  keyword: OutletPosition = OutletPosition.BEFORE;

  // protected readonly PRODUCT_SCOPE = [ProductScope.LIST, ProductScope.STOCK];

  // protected readonly PRODUCT_SCOPE_ITEM = [ProductScope.LIST_ITEM];

  // private componentData$: Observable<model> = this.componentData.data$.pipe(
  //   filter((data) => Boolean(data))
  // );

  
  // title$: Observable<string | undefined> = this.componentData$.pipe(
  //   map((data) => data.title)
  // );




  // items$: Observable<Observable<Product | undefined>[]> =
  //   this.componentData$.pipe(
  //     map((data) => {
  //       const componentMappingExist = !!data.composition?.inner?.length;
  //       const codes = data.productCodes?.trim().split(' ') ?? [];
  //       return { componentMappingExist, codes };
  //     }),
  //     map(({ componentMappingExist, codes }) => {
  //       if (this.featureConfigService.isEnabled('useProductCarouselBatchApi')) {
  //         const scope = componentMappingExist ? 'carousel' : 'carouselMinimal';
  //         return codes.map((code: string) =>
  //           this.productSearchByCodeService.get({ code, scope })
  //         );
  //       } else {
  //         const productScope = componentMappingExist
  //           ? [...this.PRODUCT_SCOPE]
  //           : [...this.PRODUCT_SCOPE_ITEM];
  //         return codes.map((code: string) =>
  //           this.productService.get(code, productScope)
  //         );
  //       }
  //     })
  //   );

}
