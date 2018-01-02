var h = require('hyperscript')
var path = require('path')
var http = require('http')

require('depject')([
  //require('./modules'),
  require('patchapp-threads'),
  {rawMessages: require('patchless/modules/raw')},
  {
  id:  require('patchidentity'),
  key: require('./modules/key'),
  nav: require('patchnav-less'),
  compose:  require('patchcompose'),
  names:  require('patchavatar-names'),
  avatarViews:  require('patchavatar-names/view'),
  avatarRaw:  require('patchavatar-raw'),
  confirm:  require('patchconfirm-lightbox'),
  suggest: require('patchsuggest'),
  sbot: require('patchless/modules/sbot')
  },
  {
    app: {
      gives: {},
      needs: { 
        nav: { screen: 'first' },
        avatar: {image: 'first', name: 'first'},
        identity: {main: 'first'}
      },
      create: function (api) {
        if ((localStorage.remote === undefined) || (localStorage.remote === '')) {
          http.get('http://localhost:8989/get-address', function (res) {
            res.on('data', (ws) => {
              ws = ws + ''
              if (ws.startsWith('ws://')) {
                localStorage.remote = ws
              } else {
                console.log(ws + 'is not a valid ws address')
              }
            })
          }).on('error', (e) => {
            console.log(e.message)
          })
        }

        id = api.identity.main()

        document.head.appendChild(h('style', require('./style.css.json')))
        document.body.appendChild(h('div.navbar',
          h('div.internal',
            h('li', h('a.Avatar', {href: id}, api.avatar.image(id))),
            h('li', h('a', {href: id}, api.avatar.name(id))),
            h('li', h('a', {href: 'public'}, 'Public')),
            //h('li', h('a', {href: '#mentions'}, 'Mentions')),
            h('li', h('a', {href: 'private'}, 'Private')),
            h('li', h('a', {href: 'compose'}, 'Compose')),
            h('li', h('a', {href: 'key'}, 'Key')),
            /*h('form.search', { onsubmit: function (e) {
                //if (err) throw err
                window.location.hash = '?' + search.value
                e.preventDefault()
              }},
              search,
              h('button.btn.btn-primary.btn-search', 'Search')
            )*/
          )
        ))
        document.body.appendChild(api.nav.screen())
        return function () {}
      }
    }
  },
  require('patchapp-vote'),
  require('patchcompose-drafts'),
  require('patchcompose-file'),
  require('patchcompose-legacy-mentions'),
  require('patchcompose-recipients'),
])


