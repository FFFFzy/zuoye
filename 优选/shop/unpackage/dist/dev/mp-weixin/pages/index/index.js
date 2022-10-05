"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_head_searchIpt2 = common_vendor.resolveComponent("head-searchIpt");
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  (_easycom_head_searchIpt2 + _easycom_u_swiper2)();
}
const _easycom_head_searchIpt = () => "../../components/head-searchIpt/head-searchIpt.js";
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  (_easycom_head_searchIpt + _easycom_u_swiper + goodList)();
}
const goodList = () => "./goodList.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      banner: [],
      cate: [],
      floor: []
    });
    api_api.getSwiper().then((res) => {
      data.banner = res.message;
    });
    api_api.getCate().then((res) => {
      data.cate = res.message;
    });
    api_api.getFloor().then((res) => {
      data.floor = res.message;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.banner,
          name: "image_src",
          ["border-radius"]: "0",
          height: "290",
          [";"]: true
        }),
        b: common_vendor.f(data.cate, (item, i, i0) => {
          return {
            a: item.image_src,
            b: i
          };
        }),
        c: common_vendor.p({
          data: data.floor
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Z/Desktop/\u4F18\u9009/shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
