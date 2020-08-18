<template>	
  <article class="md:w-3/4 mx-auto">
    <label :for="id" class="text-gray-800 uppercase text-xs py-1">
      Search Video Or Enter Video Url 
    </label>
    <div class="md:w-full">
      <input 
	:id="id" 
	type="text" 
	v-model="searchTerm"
	class="w-9/12 md:w-10/12 p-2 border-2 border-red-600 rounded">
      <button 
	@click="search"
	class="ml-1 uppercase bg-red-600 text-white align-top rounded text-xs font-semibold">
	Search
      </button>
    </div>
  </article>
</template>

 <script>
 import { store } from "../store/store.js";

 export default {
  name: "SearchInput",
  props: {
    id:String
  },
  data(){
    return {
      searchTerm: ""
    }
  },
  methods: {
    search(){
      this.$parent.clearVideos()
      const isUrl = store.isUrl(this.searchTerm)
      if(isUrl){
	if(!this.searchTerm.startsWith("http")){
	this.searchTerm = "https://"+this.searchTerm
	}
	const url = new URL(this.searchTerm)
	const videoId = url.searchParams.get('v')
	this.getVideoInfo(videoId)
      }else{
	this.searchYoutube(this.searchTerm)
      }
    },
    searchYoutube(searchString){
      this.$parent.setLoadingStatus(true)
      store.searchYoutube(searchString)
      .then(data => {
	this.$parent.setVideos(data)
	this.$parent.setLoadingStatus(false)
      })
    },
    getVideoInfo(videoId){
      this.$parent.setLoadingStatus(true)
      store.getVideoInfo(videoId)
      .then(({ formats, videoDetails}) => {
	const videos = [{
	videoUrl: videoDetails.video_url,
	formats: formats.splice(0,5),
	videoId: videoDetails.videoId,
	title: videoDetails.title,
	thumbnail: videoDetails.thumbnail.thumbnails[0].url
	}]
	this.$parent.setVideos(videos)
	this.$parent.setLoadingStatus(false)
      })
    }
  }
 }
 </script>

 <style scoped>
 button {
   margin-top: 1px;
   padding: 0.77rem;
 }

 input:focus {
   outline: none;
   border-color: black;
 }
 </style>
