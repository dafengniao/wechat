Page({
	data: {
		loadingHidden: false,
		topn:[],
		list: [],
		duration: 1000,
	    indicatorDots: true,
	    autoplay: true,
	    interval: 5000,
	    loading: false,
	    plain: false,
	},
	//事件处理函数
  bindViewTap: function(e) {
  	if( e.target.dataset.type == 4){
  		console.log('type=4');
  	}
  	if( e.target.dataset.type == 2 ){
  		wx.navigateTo({
	      url: '../shop/show?id=' + e.target.dataset.id
	    })
  	}
  	
  },
	onLoad: function() {
		var that = this
		wx.request({
			url: 'http://m.taihuoniao.com/app/api/gateway/slide',
			data: {
				name: 'app_index_slide'
			},
			header: {
		        'Content-Type': 'application/json'
		    },
			success: function(res) {
				//console.log(123)
				console.log(res.data.data.rows)
				//console.log(res.data.data.img_url)
				that.setData({
		          // 拼接数组
		          topn: res.data.data.rows,
		          loadingHidden: true,
		        })
			}
		})
		/*wx.request({
		    url: 'http://japi.juhe.cn/book/recommend.from',
		    data: {
		     dtype: 'techNews' ,
		     key: '2902be9140e2376638d02ca644b46aa2'
		    },
		    header: {
		        'Content-Type': 'application/json'
		    },
		    success: function(res) {
		      that.setData({
		        list:res.data.result.data
		      })
		      
		    }
		})*/
	}
})