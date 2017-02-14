
function load(page, option) {
  wx.request({
    url: 'https://www.baidu.com', //仅为示例，并非真实的接口地址
    success: function(res) {
      console.log("打印数据"+res.data);

      let videoData = [];
      res.data.dailyList.forEach((daily) => {
          daily.videoList.forEach((video) => {
          videoData.push(video);
        });
      });

      page.setData({
        videos: videoData,
      });
    },
    fail: function () {
      // TODO
      console.log("失败了");
    }
  });
}

function tap(page, element) {
  const url = element.currentTarget.dataset.videoUrl;

  page.setData({
    coverTop: element.currentTarget.offsetTop,
    currentUrl: url,
    videoDisplay: "block",
  });

  setTimeout(function startPlay() {
    const currentVideoContext = wx.createVideoContext('video');
    currentVideoContext.play();
  }, 500);
}

Page({
  data: {
    videos: [],
    videoDisplay: "none",
    coverTop: 0,
    currentUrl: null,
  },

  onLoad: function(options) {
    load(this, options);
  },

  onTap: function (element) {
    tap(this, element);
  },
})
