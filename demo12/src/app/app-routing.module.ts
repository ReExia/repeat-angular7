import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {

    path:'home',component:HomeComponent
  },

  {

    path:'news',component:NewsComponent
  },
  {

    path:'newscontent',component:NewscontentComponent
  },  
  {

    path:'product',component:ProductComponent
  },

  //匹配不到路由的时候加载的组件 或者跳转的路由
  {

    path:'**',redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
