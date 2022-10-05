"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "head-searchIpt",
  data() {
    const goSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/searchView/searchView"
      });
    };
    return {
      goSearch
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $data.goSearch && $data.goSearch(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/shop/components/head-searchIpt/head-searchIpt.vue"]]);
wx.createComponent(Component);
