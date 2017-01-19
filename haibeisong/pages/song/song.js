Page({

    data: {
        songName: '',
        singerName: '',
        total: '',
        // coverSrc: 'img/tongyang.jpg',
    },

    singerNameInput: function (e) {
        this.setData({ singerName: e.detail.value })
    },
    songNameInput: function (e) {
        this.setData({ songName: e.detail.value })
    },

    bindSubmitTap: function () {
        var temp = Object.assign(this.getData.singerName, this.getData.songName);
        this.setData({
            singName: temp
        });
    },

    onLoad: function () {

    },

})