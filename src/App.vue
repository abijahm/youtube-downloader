<template>
  <div id="app" class="px-2">
  <h1 class="text-center text-2xl font-semibold text-gray-700">Youtube Video Downloder</h1>
  <search-input id="search">Search</search-input>
  <search-results></search-results>
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput.vue"
import SearchResults from "./components/SearchResults"

export default {
  name: "App",
  components: {
    SearchInput,
    SearchResults
  }
}
</script>

<style>
</style>
