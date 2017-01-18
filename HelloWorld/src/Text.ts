
// 文本
class textTest extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        let container: egret.Sprite = new egret.Sprite();
        this.addChild(container);

        // 创建文本
        // let label: egret.TextField = new egret.TextField();
        // label.text = "这是一个文本";
        // this.addChild(label);
        // label.width = 480;
        // label.height = 270;
        // label.textColor = 0x00ff00;
        // label.fontFamily = "KaiTi";
        // label.textAlign = egret.HorizontalAlign.CENTER;
        // label.verticalAlign = egret.VerticalAlign.BOTTOM;

        // 输入文本
        // let txInput: egret.TextField = new egret.TextField;
        // txInput.type = egret.TextFieldType.INPUT;
        // txInput.width = 282;
        // txInput.height = 40;
        // txInput.x = 104;
        // txInput.y = 100;
        // txInput.textColor = 0x0000ff;
        // container.addChild(txInput);

        // layTxBg(txInput);
        // container.addChild(txInput)

        // 获得焦点
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

        // function layTxBg(tx: egret.TextField) {
        //     var shp: egret.Shape = new egret.Shape;
        //     shp.graphics.beginFill(0xffffff);
        //     shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        //     shp.graphics.endFill();
        //     container.addChild(shp);
        // }

        // 设置输入样式
        var text: egret.TextField = new egret.TextField();
        text.type = egret.TextFieldType.INPUT;
        //设置输入文本的样式为文本
        text.inputType = egret.TextFieldInputType.TEXT;
        text.text = "输入文本:";
        text.width = 300;
        this.addChild(text);
        var pass: egret.TextField = new egret.TextField();
        pass.type = egret.TextFieldType.INPUT;
        //设置输入文本显示为密码
        pass.inputType = egret.TextFieldInputType.PASSWORD;
        //设置密码显示
        pass.displayAsPassword = true;
        pass.text = "输入密码:";
        pass.y = 100;
        pass.width = 300;
        this.addChild(pass);
        var tel: egret.TextField = new egret.TextField();
        tel.type = egret.TextFieldType.INPUT;
        //设置输入电话号样式
        tel.inputType = egret.TextFieldInputType.TEL;
        tel.text = "输入电话号:"
        tel.y = 200;
        tel.width = 300;
        this.addChild(tel);
    }
}
