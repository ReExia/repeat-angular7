import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //组件名称
  templateUrl: './app.component.html', //组件对应的html 
  styleUrls: ['./app.component.scss'] //组件对应的css
})
export class AppComponent {
  //定义属性
  title = 'demo01';

  //构造函数
   constructor(){
  
   }


}
