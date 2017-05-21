// bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * setattr
   */
  click:function(e)
  {
    this.setData({
      loading: true
    })
  },
  register:function (e) {
      wx.redirectTo({
          url: '/pages/'
      })
  },
  formSubmit:function(e){
    let url = "http://myauth.zuzhanghao.com/api/wechat/bindAccount ";
    console.log(url)
    for (var key in e.detail.value)
    {
      if (e.detail.value[key] == '')
      {
          wx.showToast({
            title: '错误,输入值不能为空',
            icon: 'loading',
            duration: 2000
          })
          this.setData({
              loading: false
          })
          return false
      }
    }
      wx.request({
          url: url,
          data: {
              username: e.detail.value.username,
              password: e.detail.value.password
          },
          header: {},
          method: 'post',
          dataType: '',
          success: function(res)
          {
              console.log(res)
          },
          fail: function(res) {},
          complete: function(res) {},
      })
  }
})