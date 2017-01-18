/**
 * 游戏界面
*/
class BasePanel extends eui.Component{
     /**加载进度界面*/
    private loadingView:LoadingUI;
    /**需预加载的资源组*/    
    private groupList:string[] = [];
    /**资源是否加载完成*/
    private isLoading:boolean = false;
    /**皮肤资源是否正在加载*/  
    private isSkinLoading:boolean = true;
    private autoHideNode:egret.DisplayObject;

    constructor(){
        super();
        this.addEventListener(egret.Event.COMPLETE, this.onSkinLoadComplete, this);
    }
    
    /**发送数据*/
    // public setData(data:any){}
    
    /**初始化背景颜色*/
    protected onInit():void {
        const rect = new eui.Rect();
        rect.fillColor = Color.BLACK;
        rect.fillAlpha = Color.PANEL_MASK_ALPHA;
        rect.width = GameCtl.gameWidth;
        rect.height = GameCtl.gameHeight;
        this.addChildAt(rect, 0);
    }
    
    /**加载资源组*/
    protected loadGroup(group:string):void{
        this.groupList.push(group);

        if (!this.isLoading){
            this.next();
        }
    }
 
    /**开始预加载资源组*/
    private next():void{
        if (!this.isLoading){
            if (!this.loadingView){
                this.loadingView = new LoadingUI();
                this.addChild(this.loadingView);
            }else{
                this.loadingView.visible = true;
            }

            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadComplete, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
            RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isLoading = true;
        }
        RES.loadGroup(this.groupList.shift());
    }

    /**group资源组加载完成*/
    protected onGroupLoadComplete(e:RES.ResourceEvent){
        if (this.groupList.length === 0){
            this.isLoading = false;
            this.onResourceLoadComplete();
        } else {
            this.next();
        }
    }
    
    /**资源组加载出错*/
    protected onGroupLoadError(e:RES.ResourceEvent){
        console.warn("Group:" + e.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onGroupLoadComplete(e);
    }
    
    /**group资源组加载进度*/
    protected onGroupProgress(e:RES.ResourceEvent){
        this.loadingView.setProgress(e.itemsLoaded, e.itemsTotal);
    }
    
    /**资源组加载出错*/
    protected onItemLoadError(e:RES.ResourceEvent){
        console.warn("Url:" + e.resItem.url + " has failed to load");
    }
    
    /**资源组加载完成*/
    protected onResourceLoadComplete():void{
        this.removeChild(this.loadingView);
        this.loadingView = undefined;
        this.isLoading = false;
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onGroupProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        console.log("load Resource Complete");

        if (!this.isSkinLoading){
            this.onInit();
        }
    }
    
    /**皮肤资源加载完成*/
    protected onSkinLoadComplete():void{
        this.isSkinLoading = false;
        if(!this.isLoading){
            this.onInit();
        }
    }

    
}