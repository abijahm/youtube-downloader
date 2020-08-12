<template>	
  <article class="md:w-3/4 mx-auto">
    <label :for="id" class="text-gray-800 uppercase text-xs py-1">
      Search Video Or Enter Video Url 
    </label>
    <div class="md:w-full">
      <input 
	:id="id" 
	type="text" 
	v-model="searchTerm"
	class="w-9/12 md:w-10/12 p-2 border-2 border-red-600 rounded">
      <button 
	@click="search"
	class="ml-1 uppercase bg-red-600 text-white align-top rounded text-xs font-semibold">
	Search
      </button>
    </div>
  </article>
</template>

 <script>
 import axios from "axios";

 export default {
  name: "SearchInput",
  props: {
    id:String
  },
  data(){
    return {
      searchTerm: "Amapiano"
    }
  },
  methods: {
    search(){
      /* eslint-disable no-control-regex,no-useless-escape */
      let urlRegex = /https?:\/\/(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
      let isUrl = urlRegex.test(this.searchTerm)
      console.log(isUrl)
      if(isUrl){
	this.videoInfo()
      }else{
	this.searchYoutube()
      }
    },
    searchYoutube(){
      axios.get("http://localhost:3000/search/amapiano")
      .then(res => {
	console.log(res)
      })
    },
    videoInfo(){
      axios.get("http://localhost:3000/info/UGN6EUi4Yio")
      .then(res => {
	console.log(res)
      })
    }
  }
 }
 </script>

 <style scoped>
 button {
   margin-top: 1px;
   padding: 0.77rem;
 }

 input:focus {
   outline: none;
   border-color: black;
 }
 </style>
