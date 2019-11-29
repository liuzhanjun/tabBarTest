//index.js
const app = getApp()

  Page({

    // lifetimes:{
    //   attached: function () {
    //     console.log("attached=================")
    //   }
    // },
    onLoad: function (options) {
      // 在组件实例进入页面节点树时执行
      //设置tab页面的高度，可滑动的高度
      //屏幕可用高度-tabBar的高度，这里的tabBar的高度为50，单位都是px
      var h = wx.getSystemInfoSync().windowHeight - 50
      console.log("屏幕高度为" + h)
      this.setData({
        contentHegith: h
      })
    },
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    current:"homepage",
    contentHegith:"200px"

  },

  
    handleChange:function(e){
      console.log(e)
      var key=e.detail.key
      this.setData({
        current:key
      })
    }
    ,
    

})
