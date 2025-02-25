//requuire jsonserver in index.js
const jsonServer=require("json-server")


//create server
const myServer=jsonServer.create()


//setup path for db.json
const router=jsonServer.router("./db.json")

//create middlewear
const middlewear=jsonServer.defaults()

//define a port for running the sserver
const PORT =3000||process.env.PORT


//use middle wear router
myServer.use(middlewear)
myServer.use(router)

//run serveris given to port  toresolve cient request
myServer.listen(PORT,()=>{
    console.log(`myServer is running in port${PORT}`)
})