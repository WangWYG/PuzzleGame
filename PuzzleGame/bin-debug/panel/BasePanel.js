var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏界面
*/
var BasePanel = (function (_super) {
    __extends(BasePanel, _super);
    function BasePanel() {
        var _this = _super.call(this) || this;
        /**需预加载的资源组*/
        _this.groupList = [];
        /**资源是否加载完成*/
        _this.isLoading = false;
        /**皮肤资源是否正在加载*/
        _this.isSkinLoading = true;
        _this.addEventListener(egret.Event.COMPLETE, _this.onSkinLoadComplete, _this);
        return _this;
    }
    /**发送数据*/
    // public setData(data:any){}
    /**初始化背景颜色*/
    BasePanel.prototype.onInit = function () {
        var rect = new eui.Rect();
        rect.fillColor = Color.BLACK;
        rect.fillAlpha = Color.PANEL_MASK_ALPHA;
        rect.width = GameCtl.gameWidth;
        rect.height = GameCtl.gameHeight;
        this.addChildAt(rect, 0);
    };
    /**加载资源组*/
    BasePanel.prototype.loadGroup = function (group) {
        this.groupList.push(group);
        if (!this.isLoading) {
            this.next();
        }
    };
    /**开始预加载资源组*/
    BasePanel.prototype.next = function () {
        if (!this.isLoading) {
            if (!this.loadingView) {
                this.loadingView = new LoadingUI();
                this.addChild(this.loadingView);
            }
            else {
                this.loadingView.visible = true;
            }
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isLoading = true;
        }
        RES.loadGroup(this.groupList.shift());
    };
    /**group资源组加载完成*/
    BasePanel.prototype.onGroupLoadComplete = function (e) {
        if (this.groupList.length === 0) {
            this.isLoading = false;
            this.onResourceLoadComplete();
        }
        else {
            this.next();
        }
    };
    /**资源组加载出错*/
    BasePanel.prototype.onGroupLoadError = function (e) {
        console.warn("Group:" + e.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onGroupLoadComplete(e);
    };
    /**group资源组加载进度*/
    BasePanel.prototype.onGroupProgress = function (e) {
        this.loadingView.setProgress(e.itemsLoaded, e.itemsTotal);
    };
    /**资源组加载出错*/
    BasePanel.prototype.onItemLoadError = function (e) {
        console.warn("Url:" + e.resItem.url + " has failed to load");
    };
    /**资源组加载完成*/
    BasePanel.prototype.onResourceLoadComplete = function () {
        this.removeChild(this.loadingView);
        this.loadingView = undefined;
        this.isLoading = false;
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        console.log("load Resource Complete");
        if (!this.isSkinLoading) {
            this.onInit();
        }
    };
    /**皮肤资源加载完成*/
    BasePanel.prototype.onSkinLoadComplete = function () {
        this.isSkinLoading = false;
        if (!this.isLoading) {
            this.onInit();
        }
    };
    return BasePanel;
}(eui.Component));
__reflect(BasePanel.prototype, "BasePanel");
//# sourceMappingURL=BasePanel.js.map