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
    <div v-if="loading">
      Show loading animation....
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

</style>
