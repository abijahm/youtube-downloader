<template>	
<article class="flex md:w-5/6 mx-auto mb-2 shadow">
  <img :src="video.thumbnail" alt="" class="object-cover h-full max-w-full h-auto">
  <div class="md:pl-3 pl-1">
    <a :href="videoUrl" class="hover:underline hover:text-indigo-600 md:text-base text-sm underline" target="_blank">{{video.title}}</a>
    <div class="mt-1 flex flex-row">
      <!-- video formats -->
      <quality-select :formats="video.formats" :title="video.title"></quality-select>
    </div>
  </div>
</article>
</template>

<script>
import QualitySelect from "./QualitySelect"
import {store} from "../store/store"

export default {	
  name: "SearchResult",
  props: {
    index: Number,
    video: Object
  },
  components: {
    QualitySelect
  },
  data(){
    return {
    }
  },
  methods: {
    getFormats(){
      store.getVideoInfo(this.video.videoId)
      .then(({formats}) =>{
	this.video.formats = formats.slice(0,5)
      })
      /*axios.get("http://localhost:3000/info/"+this.video.videoId)*/
      /*.then(({data : {formats: formats}}) => {*/
	/*let audios = formats.filter(format => {*/
	/*return format.hasAudio && !format.hasVideo*/
	/*})*/
	/*let videos = formats.filter(format => {*/
	/*return format.hasVideo;*/
	/*})*/
	/*this.video.formats = formats.slice(0, 5)*/
      /*})*/
  }
  },
  computed :{
    videoUrl : function (){
      return "https://www.youtube.com/watch?v="+this.video.videoId
    }
  }
}
</script>

<style scoped>
</style>

