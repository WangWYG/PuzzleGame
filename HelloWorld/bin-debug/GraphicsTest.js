var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 绘制曲线
var GraphicsTest = (function (_super) {
    __extends(GraphicsTest, _super);
    function GraphicsTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    GraphicsTest.prototype.onAddToStage = function (event) {
        // let shp1: egret.Shape = new egret.Shape();
        // shp1.graphics.lineStyle(2, 0x00ff00);
        // shp1.graphics.moveTo(50, 200);
        // shp1.graphics.curveTo(125, 50, 200, 200);
        // shp1.graphics.endFill();
        // this.addChild(shp1);
        // let shp2: egret.Shape = new egret.Shape();
        // shp2.graphics.beginFill(0x1122cc);
        // shp2.graphics.drawArc(350, 150, 100, 0, Math.PI / 180 * 60, true);
        // shp2.graphics.endFill();
        // this.addChild(shp2);
        var r = 50;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xffff00);
        shape.graphics.moveTo(r, r); //绘制点移动(r, r)点
        shape.graphics.lineTo(r * 2, r); //画线到弧的起始点
        shape.graphics.drawArc(50, 50, 50, 0, 60 * Math.PI / 180, false); //从起始点顺时针画弧到终点
        shape.graphics.lineTo(r, r); //从终点画线到圆形。到此扇形的封闭区域形成
        shape.graphics.endFill();
        this.addChild(shape);
    };
    return GraphicsTest;
}(egret.DisplayObjectContainer));
__reflect(GraphicsTest.prototype, "GraphicsTest");
//# sourceMappingURL=GraphicsTest.js.map