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
      List: [],
      goods: [],
      options: [
        {
          icon: "chat",
          text: "\u5BA2\u670D"
        },
        {
          icon: "shop",
          text: "\u5E97\u94FA",
          info: 2,
          infoBackgroundColor: "#007aff",
          infoColor: "#f5f5f5"
        },
        {
          icon: "cart",
          text: "\u8D2D\u7269\u8F66",
          info: 2
        }
      ],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff"
        }
      ]
    });
    const GetStorage = () => {
      common_vendor.index.getStorage({
        key: "goods",
        success() {
          data.goods = JSON.parse(res.data);
          let num = 0;
          data.goods.forEach((item) => {
            num += item.number;
          });
          data.options[2].info = num;
        }
      });
    };
    const onClick = (e) => {
      common_vendor.index.switchTab({
        url: "../cart/cart"
      });
    };
    const buttonClick = (e) => {
      const obj = {
        id: data.List.cat_id,
        name: data.List.goods_name,
        price: data.List.goods_price,
        url: data.List.goods_big_logo,
        status: false,
        number: 1
      };
      const Item = data.goods.find((item) => item.id == obj.id);
      if (Item) {
        Item.number++;
        common_vendor.index.showToast({
          title: "\u5546\u54C1\u5DF2\u5B58\u5728+1"
        });
      } else {
        data.goods.push(obj);
        common_vendor.index.showToast({
          title: "\u52A0\u5165\u6210\u529F"
        });
      }
      common_vendor.index.setStorage({
        key: "goods",
        data: JSON.stringify(data.goods)
      });
      GetStorage();
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), { onClick, buttonClick });
  },
  onLoad(opt) {
    console.log(opt);
    api_api.getDetail(opt.id).then((res2) => {
      console.log(res2);
      this.List = res2.message;
      console.log(this.List);
    });
  },
  onShow() {
    common_vendor.index.getStorage({
      key: "goods",
      success: (res2) => {
        this.goods = JSON.parse(res2.data);
        let num = 0;
        this.goods.forEach((item) => {
          num += item.number;
        });
        this.options[2].info = num;
      }
    });
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_u_swiper2 + _easycom_u_icon2 + _easycom_u_parse2 + _easycom_uni_goods_nav2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_parse = () => "../../uni_modules/vk-uview-ui/components/u-parse/u-parse.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_icon + _easycom_u_parse + _easycom_uni_goods_nav)();
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
    }),
    f: common_vendor.o($setup.onClick),
    g: common_vendor.o($setup.buttonClick),
    h: common_vendor.p({
      options: _ctx.options,
      fill: true,
      buttonGroup: _ctx.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Z/Desktop/\u4F18\u9009/yx-shop/pages/Detail/Detail.vue"]]);
wx.createPage(MiniProgramPage);
