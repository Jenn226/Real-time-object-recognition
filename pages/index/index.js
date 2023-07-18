
Page({
  data: {
    images1: "https://wx4.sinaimg.cn/mw2000/005ObMS6gy1h7r5wli54cj30u00u0dlz.jpg",
    images: ["https://wx4.sinaimg.cn/mw2000/005ObMS6gy1h7r5wli54cj30u00u0dlz.jpg",
    "https://wx2.sinaimg.cn/mw2000/005ObMS6gy1h7r5wm2qjfj30u00u0dlq.jpg",
    "https://wx1.sinaimg.cn/mw2000/005ObMS6gy1h7r5wmnszxj30u00u0q5q.jpg",
    "https://wx1.sinaimg.cn/mw2000/005ObMS6gy1h7r5wn7bo0j30u00u0wiq.jpg",
    "https://wx2.sinaimg.cn/mw2000/005ObMS6gy1h7r5wgcm5dj30u00u0q86.jpg",
    "https://wx3.sinaimg.cn/mw2000/005ObMS6gy1h7r5wj1wv5j30u00u0420.jpg",
    "https://wx2.sinaimg.cn/mw2000/005ObMS6gy1h7r5wjjic3j30u00u17d0.jpg",
    "https://wx2.sinaimg.cn/mw2000/005ObMS6gy1h7r5wk9hzhj30u00u0ahe.jpg",
    "https://wx3.sinaimg.cn/mw2000/005ObMS6gy1h7r5wksbq9j30u00u0jvj.jpg",
  ],
    tempurl:[],
    id:'',
  },
 
  changeColor:function(e){
    this.setData({index: e.currentTarget.dataset['index']})
    this.setData({tempurl: e.currentTarget.dataset['src1']})
    this.setData({id: e.currentTarget.dataset['index']})
    console.log(e)

},
  loadpic:function(e){
    var that = this;
    wx.chooseImage({
      count: 1,
      sourceType:['album','camera'],
      success:function(res){
        that.setData({
          images1: res.tempFilePaths
        });
      }
    })
  }

})