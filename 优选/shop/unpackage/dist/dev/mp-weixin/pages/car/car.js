"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  _easycom_u_button2();
}
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      plain: true,
      ripple: true,
      ["custom-style"]: {
        color: "green"
      }
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/shop/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
