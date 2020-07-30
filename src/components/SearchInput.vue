<template>	
  <article class="md:w-3/4 mx-auto">
    <label :for="id" class="text-gray-800 uppercase text-xs py-1">
      Search Video Or Enter Video Url 
    </label>
    <div class="md:w-full">
      <input 
	:id="id" 
	type="text" 
	class="w-9/12 md:w-10/12 p-2 border-2 border-red-600 rounded">
      <button class="ml-1 uppercase bg-red-600 text-white align-top rounded text-xs font-semibold">
	Search
      </button>
    </div>
  </article>
</template>

 <script>
 export default {
  name: "SearchInput",
  props: {
    id:String
  },
  data: function (){
    return {
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
