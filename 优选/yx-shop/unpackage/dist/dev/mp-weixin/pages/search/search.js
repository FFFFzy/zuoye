"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      query: "",
      List: []
    });
    const change = () => {
      api_api.getsearch(data.query).then((res) => {
        console.log(res);
        if (res.meta.status == 200) {
          data.List = res.message;
        }
        console.log(data.List);
      });
    };
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/Detail/Detail?id=${id}`
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), { change, goDetail });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => _ctx.query = $event.detail.value, (...args) => $setup.change && $setup.change(...args)]),
    b: _ctx.query,
    c: _ctx.query.length != 0,
    d: common_vendor.f(_ctx.List, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: common_vendor.o(($event) => $setup.goDetail(item.goods_id)),
        c: item.goods_id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/yx-shop/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
