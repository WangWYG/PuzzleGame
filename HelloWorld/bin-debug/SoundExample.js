var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 音频系统
var SoundExample = (function (_super) {
    __extends(SoundExample, _super);
    function SoundExample() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddtoStage, _this);
        return _this;
    }
    SoundExample.prototype.onAddtoStage = function (egert) {
        this.startLoad();
    };
    SoundExample.prototype.startLoad = function () {
        //创建 URLLoader 对象
        var loader = new egret.URLLoader();
        //设置加载方式为声音
        loader.dataFormat = egret.URLLoaderDataFormat.SOUND;
        //添加加载完成侦听
        loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //音频资源放在resource文件夹下
        var url = "resource/assets/xzq.mp3";
        var request = new egret.URLRequest(url);
        //开始加载
        loader.load(request);
    };
    SoundExample.prototype.onLoadComplete = function (event) {
        var loader = event.target;
        //获取加载到的 Sound 对象
        var sound = loader.data;
        this.sound = sound;
        //一个简单的播放按钮
        var btn = new egret.Sprite();
        btn.graphics.beginFill(0x18f7ff);
        btn.graphics.drawRoundRect(0, 0, 80, 40, 5, 5);
        btn.graphics.endFill();
        btn.touchEnabled = true;
        btn.anchorOffsetX = btn.width / 2;
        btn.x = this.stage.stageWidth / 2;
        btn.anchorOffsetY = btn.height / 2;
        btn.y = this.stage.stageHeight / 2;
        //监听按钮的触摸事件
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        this.addChild(btn);
    };
    SoundExample.prototype.onTouch = function (event) {
        var sound = this.sound;
        var channel = this.soundChannel;
        if (channel) {
            //调用soundChannel对象的stop方法停止播放音频
            // console.log(channel);
            channel.stop();
            this.soundChannel = null;
            return;
        }
        //使用SoundChannel播放音频
        channel = sound.play(0, -1);
        //Egret 3.0.4 新增获取音频长度 length 属性。
        console.log(sound.length);
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
        //保存soundChannel对象
        this.soundChannel = channel;
    };
    SoundExample.prototype.onSoundComplete = function (event) {
        console.log("onSoundComplete");
    };
    return SoundExample;
}(egret.DisplayObjectContainer));
__reflect(SoundExample.prototype, "SoundExample");
//# sourceMappingURL=SoundExample.js.map