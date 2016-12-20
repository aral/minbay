var http = require('http');
var serve = require('ecstatic');
var client = require('ssb-client')

http.createServer(
  serve({ root: __dirname + '/build/'})
).listen(3000);

opts = {"modern": true}

client(function (err, sbot) {  
  if(err) throw err
  sbot.invite.create(opts, function (err, invite) {
    if(err) throw err
    var lite = invite
    console.log('Your lite client is now listening at https://localhost:3000. Here\'s an invite\nhttps://localhost:3000#' + invite)
  })
})

