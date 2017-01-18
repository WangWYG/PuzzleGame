/**
 * 工具
 */
var Util;
(function (Util) {
    /**获得皮肤*/
    function getPanelSkin(name) {
        if (name === void 0) { name = ""; }
        return "resource/eui_skins/panel/" + name + ".exml";
    }
    Util.getPanelSkin = getPanelSkin;
})(Util || (Util = {}));
//# sourceMappingURL=Util.js.map