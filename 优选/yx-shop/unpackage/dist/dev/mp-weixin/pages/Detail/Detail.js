"use strict";
var __defProp = Object.defineProperty;
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
var api_api = require("../../api/api.js");
var common_vendor = require("../../common/vendor.js");
require("../../request/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      List: []
    });
    return __spreadValues({}, common_vendor.toRefs(data));
  },
  onLoad(opt) {
    console.log(opt);
    api_api.getDetail(opt.id).then((res) => {
      console.log(res);
      this.List = res.message;
      console.log(this.List);
    });
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  (_easycom_u_swiper2 + _easycom_u_icon2 + _easycom_u_parse2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_parse = () => "../../uni_modules/vk-uview-ui/components/u-parse/u-parse.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_icon + _easycom_u_parse)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      list: _ctx.List.pics,
      name: "pics_big_url",
      height: "1000rpx"
    }),
    b: common_vendor.t(_ctx.List.goods_price),
    c: common_vendor.t(_ctx.List.goods_name),
    d: common_vendor.p({
      name: "star"
    }),
    e: common_vendor.p({
      html: _ctx.List.goods_introduce
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/yx-shop/pages/Detail/Detail.vue"]]);
wx.createPage(MiniProgramPage);
