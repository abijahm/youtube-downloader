<template>	
<article class="flex md:w-5/6 mx-auto mb-2 rounded shadow-md overflow-hidden pb-2">
  <img :src="data.thumbnail" alt="" class="md:w-1/5 w-1/3 object-cover h-full">
  <div class="md:pl-3 pl-1">
    <a :href="videoUrl" class="hover:underline hover:text-indigo-600 md:text-base text-sm underline" target="_blank">{{data.title}}</a>
    <div class="mt-1 flex md:flex-row flex-col">
      <!-- video formats -->
      <quality-select :kind="'video'" ></quality-select>
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

