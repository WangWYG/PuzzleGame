
/**
 * 游戏控制
 */
class GameCtl extends egret.EventDispatcher{
    /**GameCtl 单例*/
    private static instance:GameCtl = new GameCtl();
    /**游戏界面宽度*/
    public static gameWidth: number;
    /**游戏界面高度*/
    public static gameHeight: number;
    /**舞台*/
    public stage: egret.Stage;
    /**当前游戏界面*/
    private curPanel: BasePanel;

    /**获取单例*/
    public static get Instance():GameCtl{
        return GameCtl.instance;
    }

    
    /**显示界面*/
    public showPanel(panel:BasePanel,  replace:boolean = false){
        if (replace){
            this.replacePanel(panel);
        } else {
            this.stage.addChild(panel);
        }
        return panel;
    }

    /**显示排行榜*/
    public showRankPanel():void{
        window.location.href = "http://www.wenwuyou.com";
    }
    
    /**显示更多游戏*/
    public showMoreGame():void{
        window.location.href = "http://www.wenwuyou.com";
    }
    
    /**分享给好友*/
    public shareToFriend(title:string, content:string, img?:string):void{

    }
   
    /**获取当前界面*/
    public getCurPanel():BasePanel{
        return this.curPanel;
    }

   /**跟换界面*/
    public replacePanel(panel:BasePanel):void{
        if (this.curPanel){
            // this.curPanel.clear();
            this.curPanel.parent.removeChild(this.curPanel);
        }
        this.stage.removeChildren();
        this.curPanel = panel;
        this.stage.addChild(this.curPanel);
    }
    
}