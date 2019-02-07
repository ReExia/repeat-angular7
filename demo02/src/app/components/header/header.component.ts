import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count : number = 1;

  myid : string = 'testId';
  msg : string = 'msg';

  score : number = 0;

  event : any = {};

  value = '';

  arr = [1, 3, 4, 5, 6];

  flag = true;

  attr='red';

  today = new Date();

  items = [
    {id:1,title : 'abc1'},
    {id:2,title : 'abc2'},
    {id:3,title : 'abc3'},
    {id:4,title : 'abc4'}
  ]


  constructor() { }

  ngOnInit() {
  }

  addScore(){
    this.score++;
  }

  reduceScore(){
    this.score--;
  }

  keyupAction(e){
      console.log(e);
  }

}
