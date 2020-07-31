<template>
  <article class="table cursor-pointer">
    <p class="uppercase text-xs py-1 font-semibold">Select Video Quality</p>
    <button class="inline-block uppercase text-sm px-1 py-1 bg-red-600 text-gray-100 font-medium shadow">Download</button>
    <div class="uppercase text-sm font-medium text-gray-800 pl-4 py-1 shadow bg-white inline-block">
    <span>Webm - 720</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-5 float-right mx-2" viewBox="0 0 20 20">
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
    <ul class="rounded shadow-md py-1 mt-1 bg-white"> 
      <quality-option
      v-for="(video, index) in videos"
      :key="index"
      :kind="video.kind"
      :container="video.container"
      :quality="video.quality"
      :hasAudio="video.hasAudio">
      </quality-option>
    </ul>
  </article>
</template>

<script>
import QualityOption from "./QualityOption"

export default {	
  name: "QualitySelect",
  components: {
    QualityOption
  },
  props: {
  },
  data: function(){
    return {
      videos: [
	{container:"webm",quality:"720",hasAudio:true,kind:"video"},
	{container:"webm",quality:"320",hasAudio:true,kind:"video"},
	{container:"mp4",quality:"1440",hasAudio:false,kind:"video"},
	{container:"mp4",quality:"4k",hasAudio:false,kind:"video"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
