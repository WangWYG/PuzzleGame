var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏控制
 */
var GameCtl = (function (_super) {
    __extends(GameCtl, _super);
    function GameCtl() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GameCtl, "Instance", {
        /**获取单例*/
        get: function () {
            return GameCtl.instance;
        },
        enumerable: true,
        configurable: true
    });
    /**显示界面*/
    GameCtl.prototype.showPanel = function (panel, replace) {
        if (replace === void 0) { replace = false; }
        if (replace) {
            this.replacePanel(panel);
        }
        else {
            this.stage.addChild(panel);
        }
        return panel;
    };
    /**显示排行榜*/
    GameCtl.prototype.showRankPanel = function () {
        window.location.href = "http://www.wenwuyou.com";
    };
    /**显示更多游戏*/
    GameCtl.prototype.showMoreGame = function () {
        window.location.href = "http://www.wenwuyou.com";
    };
    /**分享给好友*/
    GameCtl.prototype.shareToFriend = function (title, content, img) {
    };
    /**获取当前界面*/
    GameCtl.prototype.getCurPanel = function () {
        return this.curPanel;
    };
    /**跟换界面*/
    GameCtl.prototype.replacePanel = function (panel) {
        if (this.curPanel) {
            // this.curPanel.clear();
            this.curPanel.parent.removeChild(this.curPanel);
        }
        this.stage.removeChildren();
        this.curPanel = panel;
        this.stage.addChild(this.curPanel);
    };
    return GameCtl;
}(egret.EventDispatcher));
/**GameCtl 单例*/
GameCtl.instance = new GameCtl();
__reflect(GameCtl.prototype, "GameCtl");
//# sourceMappingURL=GameCtl.js.map