"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["data"],
  setup() {
    return {};
  }
};
if (!Array) {
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_col2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_u_col + _easycom_u_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.data, (item, i, i0) => {
      return {
        a: item.floor_title.image_src,
        b: item.product_list[0].image_src,
        c: "705ed507-1-" + i0 + "," + ("705ed507-0-" + i0),
        d: common_vendor.f(item.product_list.slice(1), (child, idx, i1) => {
          return {
            a: idx,
            b: child.image_src
          };
        }),
        e: "705ed507-2-" + i0 + "," + ("705ed507-0-" + i0),
        f: "705ed507-0-" + i0,
        g: i
      };
    }),
    b: common_vendor.p({
      span: "4"
    }),
    c: common_vendor.p({
      span: "8"
    }),
    d: common_vendor.p({
      gutter: "16"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/shop/pages/index/goodList.vue"]]);
wx.createComponent(Component);
