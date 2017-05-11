// discovery.js
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["推荐", "热门", "搜索", "收藏"],
    currentNavtab: "0"
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
});