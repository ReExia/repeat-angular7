import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  _allChecked = false;   /*是否全选*/
  _indeterminate = false;   /*部分选中显示  -*/
 
 public _displayData = [ {   /*数据*/
    key    : '1',
    name   : 'John Brown',
    age    : 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key    : '2',
    name   : 'Jim Green',
    age    : 42,
    address: 'London No. 1 Lake Park',
  }, {
    key    : '3',
    name   : 'Joe Black',
    age    : 32,
    address: 'Sidney No. 1 Lake Park',
  } ];


  constructor() { }
  
  ngOnInit() {   /*初始化的时候把数据赋值个_displayData*/

    for(let i=0;i<30;i++){

      this._displayData.push({   /*模拟分页*/
        key    : '4'+i,
        name   : 'Joe Black'+i,
        age    : 32,
        address: 'Sidney No. 1 Lake Park',
      })
    }

  }

  //点击列表里面的checkbox的时候判断 上面的全选按钮是否选中
  _refreshStatus() {

    // every es5里面的方法
    const allChecked = this._displayData.every((value:any)=>{     
        return value.checked === true;   /*注意写法*/
      
    });
    const allUnChecked = this._displayData.every((value:any) => !value.checked);
    this._allChecked = allChecked;  /*全选*/
    this._indeterminate = (!allChecked) && (!allUnChecked);    /*部分选中显示  -*/
  }


  //全选反选功能
  _checkAll(value) {

    // alert(value);  
    if (value) {
      this._displayData.forEach((data:any) => {        
    
        data.checked = true;

      });
    } else {
      this._displayData.forEach((data:any) => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }
}
