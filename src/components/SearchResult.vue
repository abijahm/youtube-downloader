<template>	
<article class="flex md:w-5/6 mx-auto mb-2 shadow">
  <img :src="video.thumbnail" alt="" class="object-cover h-full max-w-full h-auto">
  <div class="md:pl-3 pl-1">
    <a :href="videoUrl" class="hover:underline hover:text-indigo-600 md:text-base text-sm underline" target="_blank">{{video.title}}</a>
    <div class="mt-1 flex flex-row">
      <!-- video formats -->
      <quality-select :formats="video.formats" ></quality-select>
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
    let formats = [{
      "url": "https://r6---sn-n545gpjvh-hc5e.googlevideo.com/videoplayback?expire=1597240048&ei=kJ4zX-GUJK_UxN8PwNSjQA&ip=41.90.98.182&id=o-ALimwu77tqkYok0MFPdkILCcRJgWRWovoeHcoGKN4yI4&itag=22&source=youtube&requiressl=yes&mh=sP&mm=31%2C26&mn=sn-n545gpjvh-hc5e%2Csn-woc7ln7y&ms=au%2Conr&mv=m&mvi=6&pl=19&pcm2=no&initcwndbps=180000&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=693.719&lmt=1576982992695162&ns=vynuAiPZXsS9xtCgoXosdr8D&mt=1597218345&fvip=1&fexp=23883098&c=WEB&txp=5532432&n=aCCn1zYdChMcO4p&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt%2Cns&sig=AOq0QJ8wRQIgO-X2EZnfBNc6crGl7YLhL1jReL6tXtG6uF_t8N6g9XYCIQD2lkqjVbvkM-_QN4OyAycj_DyYTOoGQw1HKdhIkiCqXQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALHvAhKdcI6pGGnNWW3sxvTQxVpL0GpVq1CmjQikgEVZAiEAgfE3pASVONKLxLpKyZMnoGvXpWJq8rQ8BKs-8cD3RKg%3D",
      "hasVideo": true,
      "hasAudio": true,
      "width": 1280,
      "height": 720,
      "quality": "hd720",
      "container": "mp4",
      "codecs": "avc1.64001F, mp4a.40.2",
    }]
    store.setVideoFormats(this.index, formats)
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

