// pages/main/main.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    faceUrl:"../resource/images/noneface.png",
    isMe:true,
    isFollow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var me = this;
    var user = app.userInfo;  //全局对象
  },
  logout:function(){
    var user = app.userInfo;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverurl+'loginOut?userId='+user.id,
      method:"post",
      data:{

      },
      header:{
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        console.log(res.data);
        wx.hideLoading();
        if(res.data.starus == 200){
          app.userInfo = null;
          wx.showToast({
            title: '注销成功',
            icon:"success",
            duration:3000
          });
          wx.redirectTo({
            url: '../userLogin/login',
          })
        }else if(res.data.status == 502){
          wx.showToast({
            title: '注销失败',
            icon:"none",
            duration:3000
          })
        }
      }
    })
  }
})