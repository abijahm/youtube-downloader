const Router = require("@koa/router")
const router = new Router()
const {google} = require("googleapis")

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YT_APIKEY
})

router.get("/search/:searchStr", async (ctx) => {
  const {searchStr} = ctx.params

  let {data} = await youtube.search.list({
    part: "id,snippet",
    q: searchStr,
    type: "video",
    maxResults: 10
  })

  ctx.body = data
})

module.exports = router
