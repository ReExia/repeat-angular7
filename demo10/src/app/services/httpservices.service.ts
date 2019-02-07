import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  constructor(public http:HttpClient) { 
  }

  
  getData(){
    let api = "http://localhost:3000/productlist";
    return this.http.get(api);
  }

  doLogin(){
     //手动设置请求的类型
     const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
     //存在跨域   
     let api='http://127.0.0.1:3000/dologin';
     this.http.post(api,{"username":"张三",'age':20},httpOptions).subscribe((response)=>{
      console.log(response);
   })
  }

}
