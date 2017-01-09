var h = require('hyperscript')
var u = require('../util')
var pull = require('pull-stream')
var Scroller = require('pull-scroll')

exports.gives = {
  screen_view: true
}

exports.create = function (api) {
  return {
    screen_view: function (path, sbot) {
      if(path === 'About') {
        if(process.title === 'browser') {
          var div = h('div.column.scroller',
            {style: {'overflow':'auto'}},
            h('div.scroller__wrapper',
              h('div.column.scroller__content',
                h('div.message',
                  h('h1', 'Minbay'),
                  h('p', h('strong', {innerHTML: 'A simple-as-possible client for <a href="http://scuttlebot.io">Scuttlebot</a></p><p><img src="http://evbogue.com:8989/blobs/get/&JwdiyjBdlIUA9GvLTJxWV9iF9e7FgV0cj2N6WDAw5Gw=.sha256" />'})),
                  h('p', {innerHTML: 'Minbay is a client for the Scuttlebot distributed social network, maintained by <a href="http://evbogue.com/">Ev Bogue</a>, based on Dominic Tarr\'s work on <a href="http://gitmx.com/%25s9mSFATE4RGyJx9wgH22lBrvD4CgUQW4yeguSWWjtqc%3D.sha256">Patchbay</a>.</p><p><strong>What is Scuttlebot?</strong> The Scuttlebot distributed social network uses a gossip network to replicate append-only cryptographically secure feeds. Think of it as a grid of interconnected nodes that share information between peers. You create your own social network by replicating the data of your friends and the friends of your friends. You can run Scuttlebot on your local machine, or use it via a remote over websockets. When you visited this page, it created a public/private keypair for you.</p><p>To view your key, click on the <strong>Your Key</strong> tab on the left side of your screen.</p><p>This key is important, because it allows you to post and authenticate messages to your feed on the distributed social network. If you lose your key, you will no longer be able to post and no one can recover your identity. If someone steals your key, they will be able to post as your identity. Record your key now, keep it safe.</p><p><strong>Try a lite client. </strong>  Here\'s an invite to my remote server at evbogue.com to get started:<br /><iframe src="http://sdash.evbogue.com/invite/" style="width: 100%; border: none; margin-bottom: 0; height: 5.2em;"></iframe><br />When you click the above link it will take to an invite page on my server. When you click "Accept", my pub will follow your identity and you will be invited to the network. Give it a second to load, and then click on the <strong>Public</strong> tab to see recent posts. The invite will set a remote server in the <strong>Your Key</strong> tab, record that server to be able to reconnect if your clear your cache. Once you\'re on say hello, follow a few people, try things out. Think about this lite client identity as disposable, you\'re just playing around right now.</p><p><strong>Join the network.</strong> To join the network as a full peer, you need to clone <a href="http://gitmx.com/%25UTn%2FAoIVVF%2F4yKI7PKIWrHeWb1q7sTMCWVyYY1XTiCk%3D.sha256">Minbay</a> to your local, build the application, and follow a pub.</p></p>Here\'s a pub invite for your local:<pre><code>evbogue.com:8008:@J2VKbbf69rK38vXIRLOCwaZdEm+0vzv/LMeaxmJks3k=.ed25519~47C2awgigUs9Yj3u5CxQoYgVsCyn1n2VeEo3NdKBGRU=</code></pre>To use this invite with Minbay on your local, make sure you have the sbot daemon running and use the command:<pre><code>node sbot invite.accept evbogue.com:8008:@J2VKbbf69rK38vXIRLOCwaZdEm+0vzv/LMeaxmJks3k=.ed25519~47C2awgigUs9Yj3u5CxQoYgVsCyn1n2VeEo3NdKBGRU=</code></pre>Running sbot on your local is a little harder than using the lite client, but it\'s much faster because your network is available on your local computer. The social network also works when you\'re offline!</p><p>That\'s all for now, if you have any questions please send me an email <a href="mailto:ev@evbogue.com">ev@evbogue.com</a>. - <a href="http://evbogue.com">Ev Bogue</a>'}) 
                )
              )
            )
          )
          return div
        }  
      }
    }
  }
}

