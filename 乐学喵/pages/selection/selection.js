// pages/selection/selection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [{
        title: '精选',
        id:'1'
      },
      {
        title: '0元课',
        id:2
      },
      {
        title: '系统课',
        id:3
      },
      {
        title: '面授集训',
        id:4
      },
      {
        title: 'MBA面试',
        id:5
      }
    ],
    currentindex:0,
  },
  highlight(e){
    console.log(e);
    this.setData({
      currentindex:e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})