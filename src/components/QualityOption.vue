<template>	
  <li class="hover:bg-gray-200 px-2 w-full ">
    <span class="mx-2 uppercase text-gray-700 mr-8 font-medium text-sm">{{container}}</span>
    <div class="float-right">
      <template v-if="kind === 'video' && !hasAudio">
	<svg class="w-4 ml-2 mr-1 text-red-500 fill-current inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z"/></svg>
      </template>
      <span class="text-gray-700">{{quality}}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: "QualityOption",
  props: {
    kind: String,
    quality: String,
    hasAudio: Boolean,
    container: String
  }
}
</script>

<style scoped>

</style>
