import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { SettingComponent } from './home/setting/setting.component';
import { ProductComponent } from './product/product.component';
import { PlistComponent } from './product/plist/plist.component';
import { PcateComponent } from './product/pcate/pcate.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [

  {
    
    path:'home',component:HomeComponent,

    children:[

      {path:'welcome',component:WelcomeComponent},

      {path:'setting',component:SettingComponent},

      {path:'**',redirectTo:'welcome'}
    ]


 },
{
  
  path:'product',component:ProductComponent,
  children:[

    {path:'plist',component:PlistComponent},

    {path:'pcate',component:PcateComponent},

    {path:'**',redirectTo:'plist'}
  ]


},

{path:'news',component:NewsComponent},
{path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
