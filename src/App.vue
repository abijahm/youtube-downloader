<template>
  <div id="app" class="px-2" @click="$emit('appclicked',$event.target)">
  <h1 class="text-center text-2xl font-semibold text-gray-700">Youtube Video Downloder</h1>
  <search-input id="search">Search</search-input>
  <search-results :videos="videos"></search-results>
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput.vue"
import SearchResults from "./components/SearchResults"
import { store } from "./store/store.js"

export default {
  name: "App",
  components: {
    SearchInput,
    SearchResults
  },
  data(){
    return {
      videos: store.state.videos
    }
  }
}
</script>

<style>
</style>
