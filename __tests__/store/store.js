const axios = require("axios")
const { store } = require("../../src/store/store");

jest.mock("axios")
describe("Test the store", function(){
  test("Should retrieve videos",function(){
    const response = JSON.parse(`{
    "data": [
      {
	"title": "Amapiano Live Balcony Mix Africa 24 (ft @lethulight)",
	"thumbnail": "https://i.ytimg.com/vi/0rFAGqix3XY/default.jpg",
	"videoId": "UGN6EUi4Yio",
	"formats": [
	]
      }
    ],
    "statusCode": 200
    }`);
    const searchStr = "Amapiano";
    axios.get.mockResolvedValue(response)
    return store.searchYoutube(searchStr).then(videos => {
      expect(videos.length).toBe(1)
      expect(axios.get).toHaveBeenCalledWith(store.baseUrl+"/search/"+searchStr)
    })
  })

  test("Should deffrenciate URLs and Search Strings", function(){
    const inputs = ["https://www.youtube.com/watch?v=witjmEEV7Es",
      "www.youtube.com/watch?v=witjmEEV7Es", "Amapiano",
      "Watch People die inside", "youtube.com/watch?v=witjmEEV7Es"]
    const results = [true, true, false,false,true]
    for(let i = 0; i < results.length; i++){
      expect(store.isUrl(inputs[i])).toBe(results[i])
    }
  })
})







