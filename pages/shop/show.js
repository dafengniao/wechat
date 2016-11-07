Page({
  data: {
    duration: 1000,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    loading: false,
    plain: false,
    art: [],
    list:[],
    brand:[],
    skulist:[],
    modalHidden: true,
    //按钮sku
    skuActive: 0,
    inventory: '',
    sale_price: '',
    toastHidden: true,
    inputValue:1,
    toastupHidden:true,
    toastwarnHidden:true,
    toastnumHidden:true,
    toasttrueHidden:true,
    skuChose:'',
  },
  onReady: function (options) {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://m.taihuoniao.com/app/api/product/view?id=' + options.id, //1050430978
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
         that.setData({
           art: res.data.data,
           list: res.data.data.asset,
           brand: res.data.data.brand,
           skulist: res.data.data.skus,
         })
      }
    })
    //console.log(options.id)
  },
  modalTap: function(e) {
    this.setData({
      modalHidden: false,
    })
  },

  modalChange: function(e) {
    this.setData({
      modalHidden: true,
    })
  },
  //点击sku
  skuClick:function(e){
    this.setData({
      skuActive: e.target.dataset.id,
      sale_price:e.target.dataset.price,
      inventory:e.target.dataset.quantity
    })
  },
  //没选sku
  toastTap:function(e){
    this.setData({
      toastHidden: false,
    })
  },
  toastChange:function(e){
    this.setData({
      toastHidden: true,
    })
  },
  //产品数量加1
  numAdd:function(e){
    this.setData({
      inputValue: parseInt(e.target.dataset.add) + 1,
      iNventory:e.target.dataset.inventory
    })
  },
  //产品数量减1
  numMinus:function(e){
    this.setData({
      inputValue: parseInt(e.target.dataset.add) - 1,
    })
  },
  bindKeyInput:function(e){
    var value = e.detail.value
    /*if( value== '' || value<1){
      this.setData({
        toastwarnHidden:false,
        inputValue:1
      })
    }else{*/
      this.setData({
        inputValue:value
      })
    //}
    
  },
  //库存不足
  toastUp:function(e){
    this.setData({
      toastupHidden:false
    })
  },
  toastupChange:function(e){
    this.setData({
      toastupHidden:true
    })
  },
  toastwarnChange:function(e){
    this.setData({
      toastwarnHidden:true
    })
  },
  toastnumChange:function(e){
    this.setData({
      toastnumHidden:true
    })
  },
  toasttrueChange:function(e){
    this.setData({
      toasttrueHidden:true
    })
  },
  toastTT:function(e){
    this.setData({
      skuChose:e.target.dataset.id,
      toastHidden:false
    })
  },
  toastKu:function(e){
    var inventory = parseInt(e.target.dataset.inventory)
    var num = parseInt(e.target.dataset.num)
    if( num > inventory  ){
      this.setData({
        toastupHidden:false
      })
    }else if( num <1 || isNaN(num)) {
      this.setData({
        toastnumHidden:false
      })
      //console.log('数量错误')
    }else{
      //console.log('加入购物车成功')
      this.setData({
        toasttrueHidden:false
      })
    }
  },
  toastBuy:function(e){
    var inventory = parseInt(e.target.dataset.inventory)
    var num = parseInt(e.target.dataset.num)
    if( num > inventory  ){
      this.setData({
        toastupHidden:false
      })
    }else if( num <1 || isNaN(num)) {
      this.setData({
        toastnumHidden:false
      })
      //console.log('数量错误')
    }else{
      console.log('跳转到购买')
    }
  },
  //跳转品牌
  brandId:function(e){
    //console.log(e.target.dataset.id)
    wx.navigateTo({
        url: '../brand/index?id=' + e.target.dataset.id
    })
  }

})