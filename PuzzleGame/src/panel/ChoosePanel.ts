/**
 * 选择界面
 */
class ChoosePanel extends BasePanel {
    /**返回按钮*/
    private returnBtn: eui.Button;
    /**简单模式按钮*/
    private easyBtn: eui.Button;
    /**普通模式按钮*/
    private normalBtn: eui.Button;
    /**困难模式按钮*/
    private diffBtn: eui.Button;

    constructor() {
        super();
        this.skinName = Util.getPanelSkin("ChoosePanel");
    }

    /**事件侦听*/
    protected onInit() {
        super.onInit();
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
    }

    /**返回主界面*/
    private Return() {
        GameCtl.Instance.showPanel(new MainPanel(), true);
    }

    /**进入简单模式*/
    private EnterEasyGame() {

    }

    /**进入普通模式*/
    private EnterNorGame() {

    }

    /**进入困难模式*/
    private EnterDiffGame() {

    }

}