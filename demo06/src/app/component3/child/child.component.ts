import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output()  private  outer=new EventEmitter();

  public msg="我是子组件footer的一个msg";


  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('我是子组件的run方法');
  }


  sendParent(){
    // alert('11');
    this.outer.emit('我是子组件的数据');
  }


}
