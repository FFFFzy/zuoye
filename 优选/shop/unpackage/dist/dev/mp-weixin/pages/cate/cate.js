"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_head_searchIpt2 = common_vendor.resolveComponent("head-searchIpt");
  _easycom_head_searchIpt2();
}
const _easycom_head_searchIpt = () => "../../components/head-searchIpt/head-searchIpt.js";
if (!Math) {
  _easycom_head_searchIpt();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cate",
  setup(__props) {
    const data = common_vendor.reactive({
      category: [],
      activeId: 1,
      categoryInfo: []
    });
    const chengeAside = (id) => {
      data.activeId = id;
      data.categoryInfo = data.category.filter((item) => item.cat_id == id)[0].children;
    };
    api_api.getCateAside().then((res) => {
      data.category = res.message;
      data.categoryInfo = res.message[0].children;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.category, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: item.cat_id == data.activeId ? 1 : "",
            c: item.cat_id,
            d: common_vendor.o(($event) => chengeAside(item.cat_id), item.cat_id)
          };
        }),
        b: common_vendor.f(data.categoryInfo, (item, k0, i0) => {
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
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Z/Desktop/\u4F18\u9009/shop/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
