var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 主界面
 */
var MainPanel = (function (_super) {
    __extends(MainPanel, _super);
    function MainPanel() {
        var _this = _super.call(this) || this;
        /**进入游戏按钮*/
        _this.enterBtn = null;
        /**宝物图鉴按钮*/
        _this.handbookBtn = null;
        /**分享按钮*/
        _this.shareBtn = null;
        /**更多游戏按钮*/
        _this.moreBtn = null;
        /**排行榜按钮*/
        _this.rankBtn = null;
        _this.skinName = Util.getPanelSkin("MainPanel");
        return _this;
    }
    /**事件侦听*/
    MainPanel.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        if (this.enterBtn) {
            this.enterBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enterGame, this);
        }
        if (this.moreBtn) {
            this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMore, this);
        }
        if (this.rankBtn) {
            this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRank, this);
        }
        if (this.handbookBtn) {
            this.handbookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showHandBook, this);
        }
        if (this.shareBtn) {
            this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareTo, this);
        }
    };
    /**进入游戏*/
    MainPanel.prototype.enterGame = function () {
        GameCtl.Instance.showPanel(new ChoosePanel(), true);
    };
    /**显示更多*/
    MainPanel.prototype.showMore = function () {
    };
    /**分享*/
    MainPanel.prototype.shareTo = function () {
    };
    /**显示宝物图鉴*/
    MainPanel.prototype.showHandBook = function () {
    };
    /**显示排行榜*/
    MainPanel.prototype.showRank = function () {
    };
    return MainPanel;
}(BasePanel));
__reflect(MainPanel.prototype, "MainPanel");
//# sourceMappingURL=MainPanel.js.map