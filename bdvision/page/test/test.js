
function load(page, option) {
  wx.request({
    url: 'https://www.baidu.com', //仅为示例，并非真实的接口地址
    success: function (res) {
      console.log("打印数据" + res.data);

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
    videos: [
      {
        id:"1",
        playUrl: "http://og3ie8mqp.bkt.clouddn.com/videotest.mp4",
        coverForFeed: "http://img.kaiyanapp.com/64f96635ddc425e3be237b5f70374d87.jpeg",
        desc: "这是描述 真的是很多事肌肤会是多久恢复释放河东狮吼发生的链接回复决定是否接受 水淀粉和苏打粉合适的肌肤"
      },
      {
        id:"2",
        playUrl: "http://og3ie8mqp.bkt.clouddn.com/videotest.mp4",
        coverForFeed: "http://img.kaiyanapp.com/64f96635ddc425e3be237b5f70374d87.jpeg",
        desc: "这是描述 真的是很多事肌肤会是多久恢复释放河东狮吼发生的链接回复决定是否接受 水淀粉和苏打粉合适的肌肤"
      },
      {
        id:"3",
        playUrl: "http://og3ie8mqp.bkt.clouddn.com/videotest.mp4",
        coverForFeed: "http://img.kaiyanapp.com/64f96635ddc425e3be237b5f70374d87.jpeg",
        desc: "这是描述 真的是很多事肌肤会是多久恢复释放河东狮吼发生的链接回复决定是否接受 水淀粉和苏打粉合适的肌肤"
      },
      {
        id:"4",
        playUrl: "http://og3ie8mqp.bkt.clouddn.com/videotest.mp4",
        coverForFeed: "http://img.kaiyanapp.com/64f96635ddc425e3be237b5f70374d87.jpeg",
        desc: "这是描述 真的是很多事肌肤会是多久恢复释放河东狮吼发生的链接回复决定是否接受 水淀粉和苏打粉合适的肌肤"
      },
    ],
    videoDisplay: "none",
    coverTop: 0,
    currentUrl: null,
  },

  onLoad: function (options) {
    // load(this, options);
  },

  onPlayTap: function (element) {
    playtap(this, element);
  },
})
