export const store = {
  state: {
    videos: [
      {
        title: "Amapiano Live Balcony Mix Africa 24 (ft @lethulight)",
        thumbnail: "https://i.ytimg.com/vi/0rFAGqix3XY/default.jpg",
        videoId: "UGN6EUi4Yio",
	formats: [
	]
      }
    ]
  },
  setVideos(videos){
    this.state.videos = videos
  },
  setVideoFormats(id, formats){
    this.state.videos[id].formats = formats
  },
  clearVideos(){
    this.state.videos = []
  }
}
