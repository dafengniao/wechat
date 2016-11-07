/*Page({
    data: {
        hidden: false
    },
})
wx.getSystemInfo({
  data: {
        hidden: false
   },
  success:function(res){
    var data = res.model;
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
  }
})
wx.getNetworkType({
    success: function (res) {
        var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
        console.log(res.networkType);
    }
})
*/
/*Page({
  data: {
    text: 'init data',
    array: [{msg: '1'}, {msg: '2'}]
  }
})*/
Page({
   data: {
        count: 1
    },
   add: function(e) {         
     this.setData({     
       count: this.data.count + 1
     })
   } 
   
})