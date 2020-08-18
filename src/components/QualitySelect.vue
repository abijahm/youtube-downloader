<template>
  <article class="table cursor-pointer relative pb-2">
    <p class="uppercase text-xs font-semibold">Select File</p>
    <button @click="download" class="inline-block uppercase px-1 py-1 bg-red-600 text-gray-100 md:font-medium md:text-sm shadow text-xs font-normal">Download</button>
    <a id="download" :href="selected.url" :download="downloadFile"></a>
    <div class="uppercase text-xs font-normal md:text-sm md:font-medium text-gray-800 md:pl-4 pl-2 py-1 shadow bg-white inline-block" @click="toggleActive">
    <span>
      <template v-if="Object.entries(selected).length">{{selected.container}} - {{selected.height || 'Audio'}}</template>
      <template v-else>Select Quality</template>
    </span>
    <svg :class="{active: active}" xmlns="http://www.w3.org/2000/svg" class="inline-block w-4 mx-1 md:w-5 float-right md:mx-2" viewBox="0 0 20 20">
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
    <ul class="rounded shadow-md py-1 mt-1 bg-white z-10 absolute w-full" :class="{active : active}" v-if="formats.length"> 
      <quality-option
      v-for="(format, index) in formats"
      :key="index"
      :hasVideo="format.hasVideo"
      :container="format.container"
      :height="format.height"
      :hasAudio="format.hasAudio"
      :index="index">
      </quality-option>
    </ul>
    <div id="loading" class="rounded shadow-md py-1 mt-1 bg-white z-10 absolute w-full text-center uppercase text-gray-700 text-xs font-semibold" :class="{active : active}" v-else>
      <svg class="inline w-5 fill-current mx-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 508.48 508.48" style="enable-background:new 0 0 508.48 508.48;" xml:space="preserve">
      <g>
      <path d="M114.928,174.046l-28.8,28.8C114.48,109.944,212.776,57.617,305.677,85.969c35.405,10.805,66.498,32.506,88.851,62.012
      l25.488-19.312C350.79,37.151,220.481,19.078,128.962,88.304c-37.933,28.692-64.873,69.53-76.322,115.694l-30.016-29.952
      L0,196.654l68.8,68.8l68.8-68.8L114.928,174.046z"/>
      <path d="M439.68,242.702l-68.8,68.8l22.624,22.624l29.136-29.12c-28.103,93.051-126.317,145.702-219.368,117.599
      c-37.011-11.178-69.311-34.231-91.912-65.599l-25.968,18.688c32.093,44.868,80.787,75.048,135.248,83.824
      c11.162,1.812,22.452,2.727,33.76,2.736c95.518-0.045,178.669-65.284,201.44-158.048l29.952,29.92l22.688-22.624L439.68,242.702z
      M438.88,288.798l0.816-0.816l1.184,1.2L438.88,288.798z"/>
      </g>
      </svg>
      Loading Options..
    </div>
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
    formats: Array,
    title: String
  },
  data: function(){
    return {
      active: false,
      selected: {}
    }
  },
  methods: {
    toggleActive: function(){
      this.active = !this.active
      if(!this.formats.length){
	/*load Formats*/
	this.$parent.getFormats()
      }
    },
    setSelected: function(index){
      if(Object.entries(this.selected).length) this.$children[this.selected.index].isActive = false
      this.$children[index].isActive = true
      this.selected = this.formats[index]
      this.selected.index = index
    },
    download: function(){
      let fileAnchor = document.createElement('a')
      fileAnchor.href = this.selected.url
      fileAnchor.setAttribute('download', this.downloadFile)
      document.body.appendChild(fileAnchor)
      fileAnchor.click()
      console.log(this.$refs)
    }
  },
  computed:{
    downloadFile(){
      return this.title+"."+this.selected.container
    }
  }
}
</script>

<style scoped>
  ul {
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s;
  }

  ul.active {
    transform: scaleY(1);
  }

  svg.active{
    transform: rotate(180deg);
  }

  svg{
    transition:transform 0.4s;
  }

  #loading {
    transform-origin: top;
    transition: transform 0.4s;
    transform: scaleY(0);
  }

  #loading.active {
    transform: scaleY(1);
  }

  #loading svg {
    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes loading{
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }


</style>






