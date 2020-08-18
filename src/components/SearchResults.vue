<template>
<div class="my-6">
  <template v-if="videos.length">
    <search-result 
      v-for="(video, index) in videos" 
      :key="video.videoId" 
      :video="video" 
      :index="index" ></search-result>
  </template>
  <div v-else>
    <div class="text-center" v-if="loading">
      <div id="load1" class="loader"></div>
      <div id="load2" class="loader"></div>
      <div id="load3" class="loader"></div>
    </div>
    <div v-else>
      Search something...
    </div>
  </div>
</div>
</template>

<script>
import SearchResult from "./SearchResult"

export default {	
  name: "SearchResults",
  props: {
    loading: Boolean,
    videos: Array
  },
  components: {
    SearchResult
  },
  data(){
    return {
    }
  }
}
</script>

<style scoped>
 div.loader{
   background-color: black;
   width:10px;
   height:10px;
   margin:.1px;
   display: inline-block;
   border-radius: 50px;
   animation-name: loading;
   animation-duration: 0.6s;
   animation-iteration-count: infinite;
   animation-direction: alternate;
}
#load2{
  animation-delay: 0.4s;
}
#load3{
  animation-delay: 0.8s;
}

@keyframes loading{
  from {
    transform: scale(1,1)
  }
  to {
    transform: scale(0.2,0.2)
  }
}

</style>
