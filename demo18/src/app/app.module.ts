import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { UserlistComponent } from './user/userlist/userlist.component';
import { VipComponent } from './user/vip/vip.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EidtuserComponent } from './user/eidtuser/eidtuser.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductComponent,
    UserComponent,
    HomeComponent,
    UserlistComponent,
    VipComponent,
    AdduserComponent,
    EidtuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
