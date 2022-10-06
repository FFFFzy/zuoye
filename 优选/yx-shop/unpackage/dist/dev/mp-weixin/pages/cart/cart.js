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
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      goods: [],
      value: 0,
      checkedAll: false
    });
    const valChange = () => {
      data.goods[index].number++;
      common_vendor.index.setStorage({
        key: "goods",
        data: JSON.stringify(data.goods)
      });
    };
    const check = () => {
      data.goods.forEach((item) => {
        item.status = !data.checkedAll;
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      valChange,
      check
    });
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "goods",
      success: (res) => this.goods = JSON.parse(res.data)
    });
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  (_easycom_u_checkbox2 + _easycom_u_number_box2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.goods, (item, index2, i0) => {
      return {
        a: "6a7ded84-0-" + i0,
        b: common_vendor.o(($event) => item.status = $event),
        c: common_vendor.p({
          modelValue: item.status
        }),
        d: item.url,
        e: common_vendor.t(item.name),
        f: common_vendor.t(item.price),
        g: common_vendor.o(($event) => $setup.valChange(index2)),
        h: "6a7ded84-1-" + i0,
        i: common_vendor.o(($event) => item.number = $event),
        j: common_vendor.p({
          modelValue: item.number
        }),
        k: index2
      };
    }),
    b: common_vendor.o($setup.check),
    c: common_vendor.o(($event) => _ctx.checkedAll = $event),
    d: common_vendor.p({
      modelValue: _ctx.checkedAll
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/yx-shop/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
