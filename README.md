微信小程序


home为首页
首页轮播图先判断type，type=4为专题，type=2为商品详情，商品id为data-id；

shop为商品详情页
onLoad读取接口：
轮播图获取接口图片数量，如果为一张图，则不使用swiper；
点击颜色分类获取相应接口，填充库存、价格、sku、产品图；
点击相应的sku获取相应的sku的价格、库存；
读取相应接口获取品牌id、品牌名、品牌logo；

brand为品牌详情页
onLoad：
接口参数的page=1，先加载品牌第一页下的产品；
获取接口的当前页(current_page)、总页数(total_page),
当滑动到底部时，page++；
当total_page >= page时请求相应接口，否则return；





