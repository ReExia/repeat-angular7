import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CartComponent } from './cart/cart.component';
import { PcontentComponent } from './pcontent/pcontent.component';
import { PlistComponent } from './plist/plist.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [CartComponent, PcontentComponent, PlistComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
