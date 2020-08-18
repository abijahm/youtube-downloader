if(process.env.NODE_ENV !== "production"){
  require("dotenv").config()
}
const Koa = require('koa')
const bodyParser = require("koa-bodyparser")
const app = new Koa()
const ytRoute = require("./routes/ytsearch")
const ytdRoute = require("./routes/ytdl")
const PORT = process.env.PORT || 3000

app.use(bodyParser())

//Set CORS
app.use(async (ctx, next)=>{
  ctx.set("Access-Control-Allow-Origin","*")
  ctx.set("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  ctx.set("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS")
  await next()
})

app.use(ytRoute.routes())
app.use(ytdRoute.routes())
app.listen(PORT)
