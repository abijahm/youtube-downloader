<template>	
<article class="flex border border-red-500 w-5/6 mx-auto">
  <img :src="data.thumbnail" alt="">
  <div class="pl-3">
    <a :href="videoUrl" class="hover:underline hover:text-indigo-600" target="_blank">{{data.title}}</a>
    <div>
      <!-- video formats -->
      <!-- audio formats -->
    </div>
  </div>
</article>
</template>

<script>
export default {	
  name: "SearchResult",
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

