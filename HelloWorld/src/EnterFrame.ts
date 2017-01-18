
// ENTER_FRAME 事件
class startTickerTest extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onLoad, this);
        console.log(123456);
    }
    // private timeOnEnterFrame: number = 0;
    // private onLoad(event: egret.Event) {
    //     this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    //     this.timeOnEnterFrame = egret.getTimer();
    // }
    // private onEnterFrame(e: egret.Event) {
    //     let now = egret.getTimer();
    //     let time = this.timeOnEnterFrame;
    //     let pass = now - time;
    //     console.log("onEnterFrame: ", (1000 / pass).toFixed(5));
    //     this.timeOnEnterFrame = egret.getTimer();
    // }

    private star: egret.Bitmap;
    //设置动画的移动速度
    private speed: number = 0.05;
    private timeOnEnterFrame = 0;
    private onLoad(event: egret.Event) {
        this.star = new egret.Bitmap(RES.getRes("bg_jpg3"));
        this.addChild(this.star);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    }
    private onEnterFrame(e: egret.Event) {
        let now = egret.getTimer();
        let time = this.timeOnEnterFrame;
        let pass = now - time;
        //console.log("onEnterFrame: ", (1000 / pass).toFixed(5),pass);
        this.star.x += this.speed * pass;
        this.timeOnEnterFrame = egret.getTimer();
        if (this.star.x > 300)
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }
}