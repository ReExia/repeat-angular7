import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './home/setting/setting.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';
import { PcateComponent } from './product/pcate/pcate.component';
import { PlistComponent } from './product/plist/plist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    WelcomeComponent,
    NewsComponent,
    ProductComponent,
    PcateComponent,
    PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
