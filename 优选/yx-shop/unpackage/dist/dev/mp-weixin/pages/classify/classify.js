"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_col2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (searchplus + _easycom_u_col + _easycom_u_row)();
}
const searchplus = () => "../../comments/search-plus.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "classify",
  setup(__props) {
    const data = common_vendor.reactive({
      classList: [],
      id: 1,
      categoryInfo: []
    });
    const change = (item) => {
      data.id = item.cat_id;
      data.categoryInfo = item.children;
    };
    api_api.taxonomy().then((res) => {
      console.log(res);
      data.classList = res.message;
      data.categoryInfo = res.message[0].children;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.classList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: item.cat_id == data.id ? 1 : "",
            c: common_vendor.o(($event) => change(item)),
            d: item.cat_id
          };
        }),
        b: common_vendor.p({
          span: "3"
        }),
        c: common_vendor.f(data.categoryInfo, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.f(item.children, (child, k1, i1) => {
              return {
                a: child.cat_icon,
                b: common_vendor.t(child.cat_name),
                c: child.cat_id
              };
            }),
            c: item.cat_id
          };
        }),
        d: common_vendor.p({
          span: "9"
        }),
        e: common_vendor.p({
          gutter: "16"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-71432b06"], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/yx-shop/pages/classify/classify.vue"]]);
wx.createPage(MiniProgramPage);
