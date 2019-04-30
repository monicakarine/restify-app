const restify = require('restify')

const server = restify.createServer({
  name: 'my-rest-api'
})

server.listen(3000, ()=>{
  console.log('api listening on 3000')
})
