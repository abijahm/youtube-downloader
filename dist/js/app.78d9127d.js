(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"17af":function(t,e,i){"use strict";var a=i("9d09"),s=i.n(a);s.a},"2e91":function(t,e,i){"use strict";var a=i("5b65"),s=i.n(a);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"px-2",attrs:{id:"app"},on:{click:function(e){return t.$emit("appclicked",e.target)}}},[i("h1",{staticClass:"text-center text-2xl font-semibold text-gray-700"},[t._v("Youtube Video Downloder")]),i("search-input",{attrs:{id:"search"}},[t._v("Search")]),i("search-results",{attrs:{videos:t.videos,loading:t.loading}})],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"md:w-3/4 mx-auto"},[i("label",{staticClass:"text-gray-800 uppercase text-xs py-1",attrs:{for:t.id}},[t._v(" Search Video Or Enter Video Url ")]),i("div",{staticClass:"md:w-full"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"w-9/12 md:w-10/12 p-2 border-2 border-red-600 rounded",attrs:{id:t.id,type:"text"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),i("button",{staticClass:"ml-1 uppercase bg-red-600 text-white align-top rounded text-xs font-semibold",on:{click:t.search}},[t._v(" Search ")])])])},o=[],l=(i("a434"),i("d3b7"),i("3ca3"),i("2ca0"),i("ddb0"),i("2b3d"),i("99af"),i("4de4"),i("d81d"),i("2909")),c=i("bc3a"),d=i.n(c),u="";var h={state:{loading:!1,youtubeUrl:"https://youtube.com?v=",baseUrl:u,videos:[]},isUrl:function(t){var e=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;return e.test(t)},setVideos:function(t){this.state.videos=t},getLoadingStatus:function(){return this.state.loading},setLoadingStatus:function(t){this.state.loading=t},getVideos:function(){return this.state.videos},setVideoFormats:function(t,e){this.state.videos[t].formats=e},clearVideos:function(){this.state.videos=[]},getVideoInfo:function(t){var e=this.state.baseUrl+"/info/"+t;return new Promise((function(t,i){d.a.get(e).then((function(e){var i=e.data.formats,a=i.filter((function(t){return t.hasVideo})),s=a.filter((function(t){return t.hasVideo&&t.hasAudio})),n={},r=a.filter((function(t){var e=!1;return n[t.height]||(e=!0,n[t.height]=t.container),t.hasVideo&&!t.hasAudio&&e}));e.data.formats=[].concat(Object(l["a"])(s),Object(l["a"])(r)),t(e.data)})).catch((function(t){i(t)}))}))},searchYoutube:function(t){var e=this.state.baseUrl+"/search/"+t;return new Promise((function(t,i){d.a.get(e).then((function(e){var i=e.data.items,a=i.map((function(t){var e=t.id.videoId,i=t.snippet,a=i.title,s=i.thumbnails;return{title:a,videoId:e,thumbnail:s.default.url,formats:[]}}));t(a)})).catch((function(t){i(t)}))}))}},f={name:"SearchInput",props:{id:String},data:function(){return{searchTerm:""}},methods:{search:function(){this.$parent.clearVideos();var t=h.isUrl(this.searchTerm);if(t){this.searchTerm.startsWith("http")||(this.searchTerm="https://"+this.searchTerm);var e=new URL(this.searchTerm),i=e.searchParams.get("v");this.getVideoInfo(i)}else this.searchYoutube(this.searchTerm)},searchYoutube:function(t){var e=this;this.$parent.setLoadingStatus(!0),h.searchYoutube(t).then((function(t){e.$parent.setVideos(t),e.$parent.setLoadingStatus(!1)}))},getVideoInfo:function(t){var e=this;this.$parent.setLoadingStatus(!0),h.getVideoInfo(t).then((function(t){var i=t.formats,a=t.videoDetails,s=[{videoUrl:a.video_url,formats:i.splice(0,5),videoId:a.videoId,title:a.title,thumbnail:a.thumbnail.thumbnails[0].url}];e.$parent.setVideos(s),e.$parent.setLoadingStatus(!1)}))}}},v=f,p=(i("17af"),i("2877")),m=Object(p["a"])(v,r,o,!1,null,"4ee39042",null),g=m.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-6"},[t.videos.length?t._l(t.videos,(function(t,e){return i("search-result",{key:t.videoId,attrs:{video:t,index:e}})})):i("div",[t.loading?i("div",{staticClass:"text-center"},[i("div",{staticClass:"loader",attrs:{id:"load1"}}),i("div",{staticClass:"loader",attrs:{id:"load2"}}),i("div",{staticClass:"loader",attrs:{id:"load3"}})]):i("div",[t._v(" Search something... ")])])],2)},x=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"flex md:w-5/6 mx-auto mb-2 shadow"},[i("img",{staticClass:"object-cover h-full max-w-full h-auto",attrs:{src:t.video.thumbnail,alt:""}}),i("div",{staticClass:"md:pl-3 pl-1"},[i("a",{staticClass:"hover:underline hover:text-indigo-600 md:text-base text-sm underline",attrs:{href:t.videoUrl,target:"_blank"}},[t._v(t._s(t.video.title))]),i("div",{staticClass:"mt-1 flex flex-row"},[i("quality-select",{attrs:{formats:t.video.formats,title:t.video.title,videoId:t.video.videoId}})],1)])])},y=[],_=(i("fb6a"),i("a9e3"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"table cursor-pointer relative pb-2"},[i("p",{staticClass:"uppercase text-xs font-semibold"},[t._v("Select File")]),i("button",{staticClass:"inline-block uppercase px-1 py-1 bg-red-600 text-gray-100 md:font-medium md:text-sm shadow text-xs font-normal",on:{click:t.download}},[t._v("Download")]),i("a",{attrs:{id:"download",href:t.selected.url,download:t.downloadFile}}),i("div",{staticClass:"uppercase text-xs font-normal md:text-sm md:font-medium text-gray-800 md:pl-4 pl-2 py-1 shadow bg-white inline-block",on:{click:t.toggleActive}},[i("span",[Object.entries(t.selected).length?[t._v(t._s(t.selected.container)+" - "+t._s(t.selected.height||"Audio"))]:[t._v("Select Quality")]],2),i("svg",{staticClass:"inline-block w-4 mx-1 md:w-5 float-right md:mx-2",class:{active:t.active},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[i("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),t.formats.length?i("ul",{staticClass:"rounded shadow-md py-1 mt-1 bg-white z-10 absolute w-full",class:{active:t.active}},t._l(t.formats,(function(t,e){return i("quality-option",{key:e,attrs:{hasVideo:t.hasVideo,container:t.container,height:t.height,hasAudio:t.hasAudio,index:e}})})),1):i("div",{staticClass:"rounded shadow-md py-1 mt-1 bg-white z-10 absolute w-full text-center uppercase text-gray-700 text-xs font-semibold",class:{active:t.active},attrs:{id:"loading"}},[i("svg",{staticClass:"inline w-5 fill-current mx-2",staticStyle:{"enable-background":"new 0 0 508.48 508.48"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 508.48 508.48","xml:space":"preserve"}},[i("g",[i("path",{attrs:{d:"M114.928,174.046l-28.8,28.8C114.48,109.944,212.776,57.617,305.677,85.969c35.405,10.805,66.498,32.506,88.851,62.012\n    l25.488-19.312C350.79,37.151,220.481,19.078,128.962,88.304c-37.933,28.692-64.873,69.53-76.322,115.694l-30.016-29.952\n    L0,196.654l68.8,68.8l68.8-68.8L114.928,174.046z"}}),i("path",{attrs:{d:"M439.68,242.702l-68.8,68.8l22.624,22.624l29.136-29.12c-28.103,93.051-126.317,145.702-219.368,117.599\n    c-37.011-11.178-69.311-34.231-91.912-65.599l-25.968,18.688c32.093,44.868,80.787,75.048,135.248,83.824\n    c11.162,1.812,22.452,2.727,33.76,2.736c95.518-0.045,178.669-65.284,201.44-158.048l29.952,29.92l22.688-22.624L439.68,242.702z\n    M438.88,288.798l0.816-0.816l1.184,1.2L438.88,288.798z"}})])]),t._v(" Loading Options.. ")])])}),C=[],S=(i("4fad"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"hover:bg-gray-200 px-1 w-full",class:{"bg-gray-200":t.isActive},on:{click:function(e){return t.setSelected(t.index)}}},[i("span",{staticClass:"mx-2 uppercase text-gray-700 mr-8 font-medium text-sm"},[t._v(t._s(t.container))]),i("div",{staticClass:"float-right"},[t.hasVideo&&!t.hasAudio?[i("svg",{staticClass:"w-4 ml-2 mr-1 text-red-500 fill-current inline-block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[i("path",{attrs:{d:"M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z"}})])]:t._e(),i("span",{staticClass:"text-gray-700 text-sm"},[t.hasVideo?[t._v(t._s(t.height))]:[t._v("No Video")]],2)],2)])}),V=[],O={name:"QualityOption",data:function(){return{isActive:!1}},props:{index:Number,hasVideo:Boolean,height:Number,hasAudio:Boolean,container:String},methods:{setSelected:function(t){this.$parent.setSelected(t),this.$parent.toggleActive()}},mounted:function(){}},j=O,L=Object(p["a"])(j,S,V,!1,null,"3e8b65fc",null),k=L.exports,A={name:"QualitySelect",components:{QualityOption:k},props:{formats:Array,title:String,videoId:String},data:function(){return{active:!1,selected:{}}},methods:{toggleActive:function(){this.active=!this.active,this.formats.length||this.$parent.getFormats()},setSelected:function(t){Object.entries(this.selected).length&&(this.$children[this.selected.index].isActive=!1),this.$children[t].isActive=!0,this.selected=this.formats[t],this.selected.index=t},download:function(){if(this.formats.length){var t=new URL(this.selected.url);t.searchParams.set("video_id",this.videoId),t.searchParams.set("title",this.title);var e=document.createElement("a");e.href=t.href,e.setAttribute("download",this.downloadFile),document.body.appendChild(e),e.click(),setTimeout((function(){document.body.removeChild(e)}),200)}}},computed:{downloadFile:function(){return this.title+"."+this.selected.container}}},$=A,I=(i("2e91"),Object(p["a"])($,_,C,!1,null,"789eeca9",null)),T=I.exports,P={name:"SearchResult",props:{index:Number,video:Object},components:{QualitySelect:T},data:function(){return{}},methods:{getFormats:function(){var t=this;h.getVideoInfo(this.video.videoId).then((function(e){var i=e.formats;t.video.formats=i.slice(0,5)}))}},computed:{videoUrl:function(){return"https://www.youtube.com/watch?v="+this.video.videoId}}},U=P,z=Object(p["a"])(U,w,y,!1,null,"87140826",null),M=z.exports,E={name:"SearchResults",props:{loading:Boolean,videos:Array},components:{SearchResult:M},data:function(){return{}}},F=E,B=(i("9232"),Object(p["a"])(F,b,x,!1,null,"9fd076f8",null)),R=B.exports,N={name:"App",components:{SearchInput:g,SearchResults:R},data:function(){return{videos:h.getVideos(),loading:h.state.loading}},methods:{setLoadingStatus:function(t){this.loading=t},setVideos:function(t){this.videos=t},clearVideos:function(){this.videos=[]}}},Q=N,Y=Object(p["a"])(Q,s,n,!1,null,null,null),D=Y.exports;i("845f");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(D)}}).$mount("#app")},"5b65":function(t,e,i){},"845f":function(t,e,i){},9232:function(t,e,i){"use strict";var a=i("f196"),s=i.n(a);s.a},"9d09":function(t,e,i){},f196:function(t,e,i){}});
//# sourceMappingURL=app.78d9127d.js.map