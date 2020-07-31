<template>	
<article class="flex md:w-5/6 mx-auto pb-4">
  <img :src="data.thumbnail" alt="" class="md:w-1/5 w-1/2">
  <div class="pl-3">
    <a :href="videoUrl" class="hover:underline hover:text-indigo-600" target="_blank">{{data.title}}</a>
    <div class="mt-2 flex justify-between">
      <!-- video formats -->
      <quality-select></quality-select>
      <!-- audio formats -->
    </div>
  </div>
</article>
</template>

<script>
import QualitySelect from "./QualitySelect"

export default {	
  name: "SearchResult",
  components: {
    QualitySelect
  },
  props: {

  },
  data: function(){
    return {
      data: {
	title: "Amapiano Live Balcony Mix Africa 24 (ft @lethulight)",
	thumbnail: "https://i.ytimg.com/vi/0rFAGqix3XY/default.jpg",
	videoId: "UGN6EUi4Yio"
      }
    }
  },
  computed :{
    videoUrl : function (){
      return "https://www.youtube.com/watch?v="+this.data.videoId
    }
  }
}
</script>

<style scoped>
</style>

