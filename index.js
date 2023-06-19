const http = require('http')

const server = http.createServer(function (req, resp) {
  console.log(req.url, typeof req.url);
  console.log(req.url.startsWith('/getData'));
  if (req.url.startsWith('/getData')) {
    resp.end(JSON.stringify({ name: 'ekko' }))
  }

})

server.listen(8080);