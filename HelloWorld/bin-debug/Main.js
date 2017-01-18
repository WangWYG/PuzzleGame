//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    //  public constructor(){
    //     super();
    //     this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    // }
    // private onAddToStage(event:egret.Event){
    //     let _myGrid:MyGrid = new MyGrid();
    //     this.addChild( _myGrid );
    // }
    Main.prototype.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    Main.prototype.touchHandler = function (evt) {
        var tx = evt.currentTarget;
        tx.textColor = 0x00ff00;
    };
    Main.prototype.createGameScene = function () {
        console.log("Hello World");
        // console.log("您好！")；
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x000000);
        bg.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        bg.graphics.endFill();
        _super.prototype.addChild.call(this, bg);
        // let tx: egret.TextField = new egret.TextField();
        // tx.text = "I'm Jack, I will use Egret create a fantasy mobile game!";
        // tx.size = 32;
        // tx.x = 15;
        // tx.y = 55;
        // tx.width = this.stage.stageWidth;
        // tx.touchEnabled = true;
        // tx.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchHandler,this);
        // this.addChild(tx);
        var batman1 = new egret.Bitmap(RES.getRes("bg_jpg1"));
        batman1.x = 50;
        batman1.y = 35;
        batman1.$setScaleX(0.2);
        batman1.$setScaleY(0.15);
        // this.addChild( batman1 );
        var batman2 = new egret.Bitmap(RES.getRes("bg_jpg2"));
        batman2.x = 120;
        batman2.y = 35;
        batman2.$setScaleX(0.5);
        batman2.$setScaleY(0.5);
        // this.addChild( batman2 );
        var batman3 = new egret.Bitmap(RES.getRes("bg_jpg3"));
        batman3.x = 190;
        batman3.y = 50;
        batman3.$setScaleX(0.5);
        batman3.$setScaleY(0.5);
        // this.addChild( batman3 );
        // batman3.anchorOffsetX = 100;
        // batman3.anchorOffsetY = 50;
        // batman3.x += 100;
        // batman3.y += 50;
        var batman4 = new egret.Bitmap(RES.getRes("bg_jpg4"));
        batman4.x = 260;
        batman4.y = 35;
        batman4.$setScaleX(0.5);
        batman4.$setScaleY(0.5);
        // this.addChild( batman4 );
        // 深度
        // console.log( "display indexes1:", this.getChildIndex( bg ), this.getChildIndex( batman1 ),  this.getChildIndex( batman2 ),  this.getChildIndex( batman3 ),  this.getChildIndex( batman4 ) );
        // this.swapChildren(batman1,batman3);
        // console.log( "display indexes2:", this.getChildIndex( bg ), this.getChildIndex( batman1 ),  this.getChildIndex( batman2 ),  this.getChildIndex( batman3 ),  this.getChildIndex( batman4 ) );
        // Tween动画
        // this.times = -1;
        // var self = this;
        // this.stage.addEventListener( egret.TouchEvent.TOUCH_TAP, function(){
        //     switch ( ++ self.times % 3 ) {
        //        case 0:
        //        egret.Tween.get( batman1 ).to({x: batman3.x},500,egret.Ease.circIn);
        //        egret.Tween.get( batman3 ).to({x: batman1.x},500,egret.Ease.circIn);
        //         break;
        //        case 1:
        //        egret.Tween.get(batman4).to({alpha: .3},500,egret.Ease.circIn).to({alpha: 1},500,egret.Ease.circIn);
        //         break;
        //        case 2:
        //        egret.Tween.get(batman2).to({scaleX: .2, scaleY: .2},500,egret.Ease.circIn).to({scaleX: .5, scaleY: .5},500,egret.Ease.circIn)
        //        break;
        //     }
        // }, this );
        this.TweenPlay(batman1, batman2, batman3, batman4);
        // 音频播放
        // let sound: egret.Sound = RES.getRes("bonus_mp3");
        // let channel: egret.SoundChannel = sound.play(0,1);
        // this.SoundPlay();
        var soundEx = new SoundExample();
        this.addChild(soundEx);
        // 网络
        // let urlreq: egret.URLRequest = new egret.URLRequest("http://httpbin.org/user-agent");
        // let urlloader: egret.URLLoader = new egret.URLLoader();
        // urlloader.addEventListener(egret.Event.COMPLETE,
        //     function (evt: egret.Event): void { console.log(evt.target.data); },
        //     this);
        // urlloader.load(urlreq);
        // this.webSocket = new egret.WebSocket();
        // this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.OnReceiveMessage, this);
        // this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        // this.webSocket.connect("echo.websocket.org", 80);
        // 绘制图像
        // let _myGrid:MyGrid = new MyGrid();
        // this.addChild( _myGrid );
        // let anch: AnchorTest = new AnchorTest();
        // this.addChild(anch);
        // let hit: HitTest = new HitTest();
        // this.addChild(hit);
        // let posMov: PositionMove = new PositionMove();
        // this.addChild(posMov);
        //创建一个文本框,设定一个scrollRect限制显示范围
        // var bigText: egret.TextField = new egret.TextField();
        // bigText.text = "平移和滚动显示对象,平移和滚动显示对象";
        // bigText.scrollRect = new egret.Rectangle(0, 0, 200, 50);
        // bigText.textColor = 0x00ff00;
        // bigText.cacheAsBitmap = true;
        // this.addChild(bigText);
        // //创建一个按钮,点击后控制文本内容向左移动
        // var btnLeft: egret.Shape = new egret.Shape();
        // btnLeft.graphics.beginFill(0xcccc01);
        // btnLeft.graphics.drawRect(0, 0, 50, 50);
        // btnLeft.graphics.endFill();
        // btnLeft.x = 50;
        // btnLeft.y = 100;
        // this.addChild(btnLeft);
        // btnLeft.touchEnabled = true;
        // btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
        // //创建一个按钮,点击后控制文本内容向右移动
        // var btnRight: egret.Shape = new egret.Shape();
        // btnRight.graphics.beginFill(0x01cccc);
        // btnRight.graphics.drawRect(0, 0, 50, 50);
        // btnRight.graphics.endFill();
        // // 旋转
        // // btnRight.rotation = 30;
        // btnRight.x = 150;
        // btnRight.y = 100;
        // this.addChild(btnRight);
        // btnRight.touchEnabled = true;
        // btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, onScroll, this);
        // //点击按钮后,控制文本向左右移动的方法
        // function onScroll(e: egret.TouchEvent): void {
        //     var rect: egret.Rectangle = bigText.scrollRect;
        //     switch (e.currentTarget) {
        //         case btnLeft:
        //             rect.x += 20;
        //             break;
        //         case btnRight:
        //             rect.x -= 20;
        //             break;
        //     }
        //     bigText.scrollRect = rect;
        // }
        // 遮罩
        // let square: egret.Shape = new egret.Shape();
        // square.graphics.beginFill(0xff0000);
        // square.graphics.drawRect(0, 0, 100, 100);
        // square.graphics.endFill();
        // this.addChild(square);
        // let circle: egret.Shape = new egret.Shape();
        // circle.graphics.beginFill(0x00ff00);
        // circle.graphics.drawCircle(25, 25, 25);
        // circle.graphics.endFill();
        // this.addChild(circle);
        // square.mask = circle;
        // let sam: SampleDate = new SampleDate();
        var tou = new TouchEventTest();
        this.addChild(tou);
        // let grap: GraphicsTest = new GraphicsTest();
        // this.addChild(grap);
        // let label: egret.TextField = new egret.TextField();
        // label.text = "这是一个文本";
        // this.addChild(label);
        // label.width = 480;
        // label.height = 270;
        // label.textColor = 0x00ff00;
        // label.fontFamily = "KaiTi";
        // label.textAlign = egret.HorizontalAlign.CENTER;
        // label.verticalAlign = egret.VerticalAlign.BOTTOM;
        // this.container = new egret.Sprite;
        // this.addChild(this.container);
        // let txInput: egret.TextField = new egret.TextField;
        // txInput.type = egret.TextFieldType.INPUT;
        // txInput.width = 282;
        // txInput.height = 40;
        // txInput.x = 104;
        // txInput.y = 100;
        // txInput.textColor = 0x0000ff;
        // /// 注意_container是事先建立好的一个显示容器，即 egret.Sprite，并且已经添加到显示列表中
        // this.container.addChild(txInput);
        // this.layTxBg(txInput);
        // this.container.addChild(txInput)
        // var textIput: egret.TextField = new egret.TextField();
        // textIput.type = egret.TextFieldType.INPUT;
        // this.addChild(textIput);
        // var button: egret.Shape = new egret.Shape();
        // button.graphics.beginFill(0x00cc00);
        // button.graphics.drawRect(0, 0, 100, 40);
        // button.graphics.endFill();
        // button.y = 150;
        // this.addChild(button);
        // button.touchEnabled = true;
        // button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
        //     textIput.setFocus();
        // }, this);
        // let te: textTest = new textTest();
        // this.addChild(te);
        // let time: TimerDemo = new TimerDemo();
        // let startTic: startTickerTest = new startTickerTest();
        // this.addChild(startTic);
        // let request = new egret.HttpRequest();
        // request.responseType = egret.HttpResponseType.TEXT;
        // request.open("http://httpbin.org/get", egret.HttpMethod.GET);
        // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // request.send();
        // request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        // request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        // request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
        this.person = new egret.Bitmap(RES.getRes("bg_jpg3"));
        this.addChild(this.person);
        this.person.scaleX = 0.5;
        this.person.scaleY = 0.5;
        egret.startTick(this.Update, this);
    };
    Main.prototype.Update = function (timestamp) {
        this.person.y += 2;
        console.log(timestamp);
        if (timestamp > 5000) {
            egret.stopTick(this.Update, this);
            console.log(this.person.y);
        }
        return false;
    };
    Main.prototype.onGetComplete = function (event) {
        var request = event.currentTarget;
        console.log("get data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
    };
    Main.prototype.onGetIOError = function (event) {
        console.log("get error : " + event);
    };
    Main.prototype.onGetProgress = function (event) {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    // 输入文本背景
    Main.prototype.layTxBg = function (tx) {
        var shp = new egret.Shape;
        shp.graphics.beginFill(0xffffff);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.container.addChild(shp);
    };
    // Tween动画
    Main.prototype.TweenPlay = function (batman1, batman2, batman3, batman4) {
        this.times = -1;
        var self = this;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            switch (++self.times % 3) {
                case 0:
                    egret.Tween.get(batman1).to({ x: batman3.x }, 500, egret.Ease.circIn);
                    egret.Tween.get(batman3).to({ x: batman1.x }, 500, egret.Ease.circIn);
                    break;
                case 1:
                    egret.Tween.get(batman4).to({ alpha: .3 }, 500, egret.Ease.circIn).to({ alpha: 1 }, 500, egret.Ease.circIn);
                    break;
                case 2:
                    egret.Tween.get(batman2).to({ scaleX: .2, scaleY: .2 }, 500, egret.Ease.circIn).to({ scaleX: .5, scaleY: .5 }, 500, egret.Ease.circIn);
                    break;
            }
        }, this);
    };
    // 音效播放
    Main.prototype.SoundPlay = function () {
        var sound = RES.getRes("bonus_mp3");
        var channel = sound.play(0, 1);
    };
    // 发送数据
    Main.prototype.onSocketOpen = function () {
        var cmd = "Hello Egret WebSocket";
        console.log("The connection is successful,send data: " + cmd);
        this.webSocket.writeUTF(cmd);
    };
    // 接收数据
    Main.prototype.OnReceiveMessage = function (e) {
        var msg = this.webSocket.readUTF();
        console.log("Receive data: " + msg);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
// 创建自己的显示对象类
var MyGrid = (function (_super) {
    __extends(MyGrid, _super);
    function MyGrid() {
        var _this = _super.call(this) || this;
        _this.drawGrid();
        return _this;
    }
    MyGrid.prototype.drawGrid = function () {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    };
    return MyGrid;
}(egret.Shape));
__reflect(MyGrid.prototype, "MyGrid");
// 锚点的操作
var AnchorTest = (function (_super) {
    __extends(AnchorTest, _super);
    function AnchorTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    AnchorTest.prototype.onAddToStage = function (event) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x00ff00);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        shp.x = 100;
        shp.y = 100;
        shp.anchorOffsetX = 50;
        this.addChild(shp);
    };
    return AnchorTest;
}(egret.DisplayObjectContainer));
__reflect(AnchorTest.prototype, "AnchorTest");
// 碰撞检测
var HitTest = (function (_super) {
    __extends(HitTest, _super);
    function HitTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.OnAddToStage, _this);
        return _this;
    }
    HitTest.prototype.OnAddToStage = function (event) {
        this.drawText();
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        this.addChild(shp);
        var isHit = shp.hitTestPoint(10, 10);
        this.infoText.text = "碰撞结果" + isHit;
    };
    HitTest.prototype.drawText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.addChild(this.infoText);
    };
    return HitTest;
}(egret.DisplayObjectContainer));
__reflect(HitTest.prototype, "HitTest");
// 位置移动
var PositionMove = (function (_super) {
    __extends(PositionMove, _super);
    function PositionMove() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.OnAddToStage, _this);
        return _this;
    }
    PositionMove.prototype.OnAddToStage = function (event) {
        //创建一个空的 Sprite，把它的 x 和 y 坐标都改为
        this.mySprite = new egret.Sprite();
        this.mySprite.x = 200;
        this.mySprite.y = 200;
        this.addChild(this.mySprite);
        //画一个红色的圆，添加到 mySprite 中
        this.circle = new egret.Shape();
        this.circle.graphics.beginFill(0xff0000);
        this.circle.graphics.drawCircle(25, 25, 25);
        this.circle.graphics.endFill();
        this.mySprite.addChild(this.circle);
        //给圆增加点击事件
        this.circle.touchEnabled = true;
        this.circle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    PositionMove.prototype.onClick = function () {
        //把舞台左上角的坐标(0,0)转换为 mySprite 内部的坐标
        var targetPoint = this.mySprite.globalToLocal(0, 0);
        //重新定位圆，可以看到圆形移到了屏幕的左上角
        this.circle.x = targetPoint.x;
        this.circle.y = targetPoint.y;
    };
    return PositionMove;
}(egret.DisplayObjectContainer));
__reflect(PositionMove.prototype, "PositionMove");
//# sourceMappingURL=Main.js.map