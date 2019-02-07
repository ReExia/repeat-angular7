import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入HttpClientModule
import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news/news.component';
import { HttpservicesService } from './services/httpservices.service';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [HttpservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
