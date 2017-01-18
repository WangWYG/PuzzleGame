
// Timer计时器
class TimerDemo extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        //创建一个计时器对象
        var timer: egret.Timer = new egret.Timer(500, 5);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        //开始计时
        timer.start();
        console.log(egret.getTimer());
    }
    private timerFunc() {
        console.log("计时");
    }
    private timerComFunc() {
        console.log("计时结束");
    }
}
