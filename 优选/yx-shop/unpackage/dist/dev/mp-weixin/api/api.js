"use strict";
var request_request = require("../request/request.js");
const getSwiper = async () => {
  let data = await request_request.request("home/swiperdata");
  return data;
};
const getCate = async () => {
  let data = await request_request.request("home/catitems");
  return data;
};
const getfloor = async () => {
  let data = await request_request.request("home/floordata");
  return data;
};
const taxonomy = async () => {
  let data = await request_request.request("categories");
  return data;
};
const getsearch = async (query) => {
  let data = await request_request.request(`goods/qsearch?query=${query}`);
  return data;
};
const getDetail = async (goods_id) => {
  let data = await request_request.request(`goods/detail?goods_id=${goods_id}`);
  return data;
};
exports.getCate = getCate;
exports.getDetail = getDetail;
exports.getSwiper = getSwiper;
exports.getfloor = getfloor;
exports.getsearch = getsearch;
exports.taxonomy = taxonomy;
