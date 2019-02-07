import { Component, OnInit } from '@angular/core';
import { StorgeService } from 'src/app/services/storge.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  keyword : string;
  historyList : any[] = [];

  constructor(public storage:StorgeService) {
    //最好不要在构造方法中初始化数据
   }

  ngOnInit() {
    console.log('页面刷新会触发这个生命周期函数');

    var searchlist:any=this.storage.get('searchlist');

    if(searchlist){
      this.historyList=searchlist;        
    }
  }

  doSearch(){
    if(this.historyList.indexOf(this.keyword) == -1){
      this.historyList.push(this.keyword);
      this.storage.set('searchlist',this.historyList);
    }
    this.keyword='';
  }

  
  deleteHistroy(key){
    this.historyList.splice(key,1);
    this.storage.set('searchlist',this.historyList);
  }

}
