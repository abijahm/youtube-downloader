<template>
  <article class="table cursor-pointer">
    <p class="uppercase text-xs font-semibold">Select File</p>
    <button class="inline-block uppercase px-1 py-1 bg-red-600 text-gray-100 md:font-medium md:text-sm shadow text-xs font-normal">Download</button>
    <div class="uppercase text-xs font-normal md:text-sm md:font-medium text-gray-800 pl-4 py-1 shadow bg-white inline-block" @click="toggleActive">
    <span>
      <template v-if="Object.entries(selected).length">{{selected.container}} - {{selected.quality || 'Audio'}}</template>
      <template v-else>Select Quality</template>
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 mx-1 md:w-5 float-right md:mx-2" viewBox="0 0 20 20">
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
    <ul class="rounded shadow-md py-1 mt-1 bg-white absolute z-10 ml-10" :class="{hidden : !active}"> 
      <quality-option
      v-for="(video, index) in videos"
      :key="index"
      :kind="video.kind"
      :container="video.container"
      :quality="video.quality"
      :hasAudio="video.hasAudio"
      :index="index">
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
    kind:String
  },
  data: function(){
    return {
      active: false,
      selected: {},
      videos: [
	{container:"webm",quality:"720",hasAudio:true,kind:"video"},
	{container:"webm",quality:"320",hasAudio:true,kind:"video"},
	{container:"mp4",quality:"1440",hasAudio:false,kind:"video"},
	{container:"mp4",quality:"4k",hasAudio:false,kind:"video"},
	{container:"mp3",quality:"",hasAudio:false,kind:"audio"},
	{container:"webm",quality:"",hasAudio:false,kind:"audio"}
      ]
    }
  },
  methods: {
    toggleActive: function(){
      this.active = !this.active
    },
    setSelected: function(id){
      if(this.selected.id >= 0) this.$children[this.selected.id].isActive = false
      this.$children[id].isActive = true
      this.selected = this.videos[id]
      this.selected.id = id
    },
    download: function(){

    }
  },
  mounted: function(){
    this.selected = this.videos[0]
  }
}
</script>

<style scoped>

</style>
