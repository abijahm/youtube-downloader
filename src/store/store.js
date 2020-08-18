import axios from "axios";

export const store = {
  state: {
    loading: false,
    youtubeUrl: "https://youtube.com?v=",
    baseUrl: "http://localhost:3000",
    videos: [
    ]
  },
  /* eslint-disable no-control-regex,no-useless-escape,no-mixed-spaces-and-tabs */
  isUrl(str){
    let urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    return urlRegex.test(str)
  },
  setVideos(videos){
    this.state.videos = videos
  },
  getLoadingStatus(){
    return this.state.loading
  },
  setLoadingStatus(isLoading){
    this.state.loading = isLoading
  },
  getVideos(){
    return this.state.videos
  },
  setVideoFormats(id, formats){
    this.state.videos[id].formats = formats
  },
  clearVideos(){
    this.state.videos = []
  },
  getVideoInfo(videoId){
    let videoInfoUrl = this.state.baseUrl+"/info/"+videoId
    return new Promise(function(resolve, reject){
      axios.get(videoInfoUrl)
      .then(res => {
	const {formats} = res.data
	let videos = formats.filter(format =>{
	  return format.hasVideo
	})
	let audioVideo = videos.filter(video => video.hasVideo && video.hasAudio)
	let noAudio = videos.filter(video => video.hasVideo && !video.hasAudio)
	res.data.formats = [...audioVideo, ...noAudio]
	resolve(res.data)
      }).catch(err =>{
	reject(err)
      })
    })
  },
  searchYoutube(searchString){
    let videoSearchUrl = this.state.baseUrl+"/search/"+searchString
    return new Promise(function(resolve, reject){
      axios.get(videoSearchUrl)
      .then(res => {
	//transform data
	const { items } = res.data
	let videos = items.map(video =>{
	  const {id: {videoId : videoId}, snippet: {title: title, thumbnails: thumbnails }} = video
	  return {
	    title: title,
	    videoId: videoId,
	    thumbnail: thumbnails.default.url, 
	    formats:[]
	  }
	})
	resolve(videos)
      }).catch(err => {
	reject(err)
      })
    })
  }
}




