var http = require('http')
var serve = require('ecstatic')
var client = require('ssb-client')

const port = 3013  

exports.serve = function() {
  http.createServer(
    serve({ root: __dirname + '/build/'})
  ).listen(port)

  opts = {"modern": true}
  
  client(function (err, sbot) {  
    if(err) throw err
    sbot.invite.create(opts, function (err, invite) {
      if(err) throw err
      var lite = invite
      console.log('Your lite client is now listening at http://localhost:' + port + '\nHere\'s an invite\nhttp://localhost:' + port + '#' + invite)
    })
  })
}
