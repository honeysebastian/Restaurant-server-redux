const jsonServer=require('json-server')
const NOTEServer=jsonServer.create()
const middleware=jsonServer.defaults()
const route=jsonServer.router('restaurants.json')
const PORT=3000|| process.env.PORT

NOTEServer.use(middleware)
NOTEServer.use(route)
NOTEServer.listen(PORT,()=>{
    console.log(`Restaurant server started at port ${PORT} and waiting for client request`);
})