"use strict";
var common_vendor = require("../common/vendor.js");
const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/";
const request = function(url, data, methods) {
  common_vendor.index.showLoading({
    title: "\u6B63\u5728\u52A0\u8F7D\u4E2D"
  });
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      method: methods || [],
      data,
      success: function(res) {
        resolve(res.data);
      },
      fail: function(err) {
        reject(err);
      },
      complete() {
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.request = request;
