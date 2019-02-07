constructor 构造函数中除了使用简单的值对局部变量进行初始化
之外，什么都不应该做。  （非生命周期函数）

ngOnChanges() 当 Angular（重新）设置数据绑定输入属性时响应。 该
方法接受当前和上一属性值的 SimpleChanges 对象
当被绑定的输入属性的值发生变化时调用，首次调用一
定会发生在 ngOnInit() 之前。

ngOnInit() 在 Angular 第一次显示数据绑定和设置指令/组件的输
入属性之后，初始化指令/组件。
在第一轮 ngOnChanges() 完成之后调用，只调用一次。
用 使用 ngOnInit()  有两个原因：
1、在构造函数之后马上执行复杂的初始化逻辑
2、在 Angular 设置完输入属性之后，对该组件进行准
备。
有经验的开发者会认同组件的构建应该很便宜和安全。

ngDoCheck() 检测，并在发生 Angular 无法或不愿意自己检测的变
化时作出反应。在每个 Angular 变更检测周期中调用，

ngOnChanges() 和 ngOnInit() 之后。

ngAfterContentInit() 当把内容投影进组件之后调用。第一次 ngDoCheck() 之
后调用，只调用一次。

ngAfterContentChecked() 每次完成被投影组件内容的变更检测之后调用。

ngAfterContentInit() 和每次 ngDoCheck() 之后调用。

ngAfterViewInit() 初始化完组件视图及其子视图之后调用。第一
次 ngAfterContentChecked() 之后调用，只调用一次。

ngAfterViewChecked() 每次做完组件视图和子视图的变更检测之后调用。

ngAfterViewInit()和每次 ngAfterContentChecked() 之后
调用。

ngOnDestroy() 当 Angular 每次销毁指令/组件之前调用并清扫。在这
儿反订阅可观察对象和分离事件处理器，以防内存泄
漏。
在 Angular 销毁指令/组件之前调用。