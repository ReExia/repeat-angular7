import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit,AfterViewInit {

  ngAfterViewInit(): void {
    this.getData();
  }

  public list:any[]=[];

  constructor(public httpservicesService:HttpservicesService) { }

  ngOnInit() {
    
  }

  getData(){
    //服务器必须允许跨域  
    this.httpservicesService.getData().subscribe((resp : any) => {

      console.log(resp);
      this.list=resp.result;
    });    
  }

  doLogin(){
    this.httpservicesService.doLogin();
  }


  

}
