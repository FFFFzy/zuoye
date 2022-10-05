"use strict";
var common_vendor = require("../common/vendor.js");
let baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
const http = function(url, method, data) {
  common_vendor.index.showLoading({
    title: "\u6B63\u5728\u62FC\u547D\u52A0\u8F7D\u4E2D..."
  });
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      method: method || "GET",
      data: data || null,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.http = http;
