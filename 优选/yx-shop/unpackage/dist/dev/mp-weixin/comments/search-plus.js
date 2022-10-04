"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search-plus",
  setup(__props) {
    const go = () => {
      common_vendor.index.navigateTo({
        url: "../search/search"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(go)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Z/Desktop/\u4F18\u9009/yx-shop/comments/search-plus.vue"]]);
wx.createComponent(Component);
