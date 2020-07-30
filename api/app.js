if(process.env.NODE_ENV !== "production"){
  require("dotenv").config()
}
const Koa = require('koa')
const app = new Koa()
const ytRoute = require("./routes/ytsearch")
const ytdRoute = require("./routes/ytdl")
const PORT = process.env.PORT || 3000

app.use(ytRoute.routes())
app.use(ytdRoute.routes())
app.listen(PORT)
