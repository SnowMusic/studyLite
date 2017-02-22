
function load(page, option) {
  wx.request({
    url: 'https://v.bandaoapp.com/bandao/api_0_0_1/newslist.php?type=getList',
    method: 'GET',
    success: function (res) {
      console.log(res.data.data);

      let videoData = [];
      for (var i = 0; i < res.data.data.length; i++) {
        videoData.push(res.data.data[i]);
      }

      page.setData({
        banner: res.data.banner,
        videos: videoData,
      });
    },
    fail: function () {
      // TODO
      console.log("失败了");
    }
  });
}

function playtap(page, element) {
  const url = element.currentTarget.dataset.videoUrl;
  const articalId = element.currentTarget.dataset.id;
  console.log(url + "-----");
  console.log(articalId + "文章id");

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
    banner: "",
    videos: [],
    videoDisplay: "none",
    coverTop: 0,
    currentUrl: null,
  },

  onLoad: function (options) {
    load(this, options);
  },

  onPlayTap: function (element) {
    playtap(this, element);
  },
})
