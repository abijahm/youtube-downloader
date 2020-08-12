<template>	
  <li :class="{'bg-gray-200' : isActive}" class="hover:bg-gray-200 px-1 w-full" @click="setSelected(index)">
    <span class="mx-2 uppercase text-gray-700 mr-8 font-medium text-sm">{{container}}</span>
    <div class="float-right">
      <template v-if="hasVideo && !hasAudio">
	<svg class="w-4 ml-2 mr-1 text-red-500 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z"/></svg>
      </template>
      <span class="text-gray-700 text-sm">
      <template v-if="!hasVideo">No Video</template>
      <template v-else>{{quality}}</template>
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: "QualityOption",
  data: function(){
    return {
      isActive: false
    }
  },
  props: {
    index: Number,
    hasVideo: Boolean,
    quality: String,
    hasAudio: Boolean,
    container: String
  },
  methods: {
    setSelected: function(id){
      this.$parent.setSelected(id)
      this.$parent.toggleActive()
    }
  },
  mounted: function(){
  }
}
</script>

<style scoped>
</style>



