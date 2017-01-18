var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// ENTER_FRAME 事件
var startTickerTest = (function (_super) {
    __extends(startTickerTest, _super);
    function startTickerTest() {
        var _this = _super.call(this) || this;
        //设置动画的移动速度
        _this.speed = 0.05;
        _this.timeOnEnterFrame = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
        console.log(123456);
        return _this;
    }
    startTickerTest.prototype.onLoad = function (event) {
        this.star = new egret.Bitmap(RES.getRes("bg_jpg3"));
        this.addChild(this.star);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    startTickerTest.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        //console.log("onEnterFrame: ", (1000 / pass).toFixed(5),pass);
        this.star.x += this.speed * pass;
        this.timeOnEnterFrame = egret.getTimer();
        if (this.star.x > 300)
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    return startTickerTest;
}(egret.DisplayObjectContainer));
__reflect(startTickerTest.prototype, "startTickerTest");
//# sourceMappingURL=EnterFrame.js.map