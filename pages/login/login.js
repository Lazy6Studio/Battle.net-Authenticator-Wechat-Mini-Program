// login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    wx.setNavigationBarTitle({
      title: '登录授权中...'
    })
    console.log("app.js.login")
    // wx.checkSession({
    //   success: function () {
    //     wx.redirectTo({
    //       url: '/pages/index/index',
    //       success: function (res) { },
    //       fail: function (res) { },
    //       complete: function (res) { },
    //     })
    //   },
    //   fail: function () {
        wx.login({
          success: function (res) {
            if (res.code) {
              let url = "http://myauth.zuzhanghao.com/api/wechat/getSessionToken"
              wx.request({
                url: url,
                data: { code: res.code },
                header: {},
                method: 'post',
                dataType: 'json',
                success: function (res) {
                  wx.setStorageSync(
                    "skey",
                    res.data.data.token_wechat_session_v1
                  )
                  if (res.data.code == 200) {
                    if (res.data.data.hasAuth === false) {
                      wx.redirectTo({
                        url: '/pages/auth/addAuthByServer/addAuthByServer',
                        success: function (res) { },
                        fail: function (res) { },
                        complete: function (res) { },
                      })
                    } else {
                      wx.redirectTo({
                        url: '/pages/index/index',
                        success: function (res) { },
                        fail: function (res) { },
                        complete: function (res) { },
                      })
                    }
                  }
                  else if (res.data.code == 428) {
                    wx.redirectTo({
                      url: '/pages/bind/bind',
                      success: function (res) { },
                      fail: function (res) { },
                      complete: function (res) { },
                    })
                  } else {
                    wx.showToast({
                      title: res.data.message,
                      icon: 'loading'
                    })
                  }
                }
              })
            } else {
              console.log('用户信息获取失败' + res.errMsg)
            }
          }
        })
      // }
    // })
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

  }
})