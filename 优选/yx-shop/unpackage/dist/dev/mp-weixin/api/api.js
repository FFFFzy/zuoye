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
exports.getCate = getCate;
exports.getSwiper = getSwiper;
exports.getfloor = getfloor;
exports.taxonomy = taxonomy;
