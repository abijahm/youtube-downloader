const Router = require("@koa/router")
const ytdl = require("ytdl-core")

const router = new Router()

router.get("/info/:videoid", async (ctx) => {
  const {videoid} = ctx.params
  let info = await ytdl.getInfo(videoid)
  ctx.body = info
})

module.exports = router
