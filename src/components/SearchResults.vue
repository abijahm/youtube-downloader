<template>
<div class="my-6">
  <search-result v-for="(video, index) in videos" :key="video.videoId" :video="video" :index="index"></search-result>
</div>
</template>

<script>
import SearchResult from "./SearchResult"

export default {	
  name: "SearchResults",
  props: {
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
