"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  (searchplus + _easycom_u_swiper + FloorItem)();
}
const FloorItem = () => "../../comments/floor-item.js";
const searchplus = () => "../../comments/search-plus.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      imageList: [],
      cateList: [],
      floorList: []
    });
    api_api.getSwiper().then((res) => {
      data.imageList = res.message;
    });
    api_api.getCate().then((res) => {
      data.cateList = res.message;
    });
    api_api.getfloor().then((res) => {
      console.log(res);
      if (res.meta.status == 200) {
        data.floorList = res.message;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: data.imageList,
          name: "image_src"
        }),
        b: common_vendor.f(data.cateList, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index
          };
        }),
        c: common_vendor.f(data.floorList, (item, index, i0) => {
          return {
            a: "8029c82c-2-" + i0,
            b: common_vendor.p({
              data: item
            }),
            c: index
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Z/Desktop/\u4F18\u9009/yx-shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
