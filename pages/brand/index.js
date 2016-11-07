Page({
  data: {
    hidden:true,
    list:[],
  	brdata:[],
  	brall:[],
    loadingHidden:true,
    morelist:[],
    toastnoHidden:true,
  },
  onReady: function (options) {
    wx.setNavigationBarTitle({
      title: '品牌详情'
    })
  },
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
        success:function(res){
            that.setData({
                scrollHeight:res.windowHeight
            });
        }
    }),
    wx.request({
      url: 'http://m.taihuoniao.com/app/api/scene_brands/view?id=' + options.id, //1045548729
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           brdata: res.data.data,
         })
      }
    }),
    wx.request({
      url: 'http://m.taihuoniao.com/app/api/product/getlist?brand_id=' + options.id, //1045548729
      data:{
        page: 1,
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           list: res.data.data.rows,
           brall:res.data.data,
         })
      }
    })


  },
  bindViewTap: function(e) {
	  wx.navigateTo({
      url: '../shop/show?id=' + e.target.dataset.id
    })
  },
  bindDownLoad:function(e){
    //   该方法绑定了页面滑动到底部的事件
    var moreid = e.target.dataset.id;
    var page =e.target.dataset.page;
    var page = ++page;
    var totalpage = e.target.dataset.totalpage;
    var that = this;
    if (!(totalpage >= page)) {
      this.setData({
          toastnoHidden:false
      });
      return;
    }
    that.setData({ hidden: false })
    wx.request({
      url: 'http://m.taihuoniao.com/app/api/product/getlist?brand_id=' + moreid, //1045548729
      data:{
        page: page,
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          hidden: true,
          brall: res.data.data,
          list: that.data.list.concat(res.data.data.rows),
         })
        console.log(totalpage);
        console.log(page);
      }
    })


  },
  scroll:function(event){
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  toastnoChange:function(e){
    this.setData({
      toastnoHidden:true
    })
  },
 })




