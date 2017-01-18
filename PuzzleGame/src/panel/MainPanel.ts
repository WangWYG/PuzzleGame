
/**
 * 主界面
 */
class MainPanel extends BasePanel{
    
	/**进入游戏按钮*/
	private enterBtn:eui.Button = null;
	/**宝物图鉴按钮*/
	private handbookBtn:eui.Button = null;
	/**分享按钮*/
	private shareBtn:eui.Button = null;
	/**更多游戏按钮*/
	private moreBtn:eui.Button = null;
	/**排行榜按钮*/
	private rankBtn:eui.Button = null;

    constructor() {
        super();
        this.skinName = Util.getPanelSkin("MainPanel");
    }

     /**事件侦听*/
	protected onInit(){
		super.onInit();
		if (this.enterBtn){
			this.enterBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enterGame, this);
		}
		if (this.moreBtn){
			this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMore, this);
		}
		if (this.rankBtn){
			this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showRank, this);
		}
		if (this.handbookBtn){
			this.handbookBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showHandBook, this);
		}
		if (this.shareBtn){
			this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareTo, this);
		}
	}
    
	/**进入游戏*/
	private enterGame(){
		GameCtl.Instance.showPanel(new ChoosePanel(), true);
	}

    /**显示更多*/
	private showMore(){
	}
    
	/**分享*/
	private shareTo(){
	}
    
	/**显示宝物图鉴*/
	private showHandBook(){
	}
    
	/**显示排行榜*/
	private showRank(){
	}
}