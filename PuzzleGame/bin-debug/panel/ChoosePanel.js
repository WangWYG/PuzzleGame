var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 选择界面
 */
var ChoosePanel = (function (_super) {
    __extends(ChoosePanel, _super);
    function ChoosePanel() {
        var _this = _super.call(this) || this;
        _this.skinName = Util.getPanelSkin("ChoosePanel");
        return _this;
    }
    /**事件侦听*/
    ChoosePanel.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        if (this.returnBtn) {
            this.returnBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.Return, this);
        }
        if (this.easyBtn) {
            this.easyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.EnterEasyGame, this);
        }
        if (this.normalBtn) {
            this.normalBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.EnterNorGame, this);
        }
        if (this.diffBtn) {
            this.diffBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.EnterDiffGame, this);
        }
    };
    /**返回主界面*/
    ChoosePanel.prototype.Return = function () {
        GameCtl.Instance.showPanel(new MainPanel(), true);
    };
    /**进入简单模式*/
    ChoosePanel.prototype.EnterEasyGame = function () {
    };
    /**进入普通模式*/
    ChoosePanel.prototype.EnterNorGame = function () {
    };
    /**进入困难模式*/
    ChoosePanel.prototype.EnterDiffGame = function () {
    };
    return ChoosePanel;
}(BasePanel));
__reflect(ChoosePanel.prototype, "ChoosePanel");
//# sourceMappingURL=ChoosePanel.js.map