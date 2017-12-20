var h = require('hyperscript')
var path = require('path')
var http = require('http')

require('depject')([
  require('./modules'),
  {
  identity:  require('patchidentity'),
  nav: require('./modules/nav'),
  compose:  require('patchcompose'),
  names:  require('patchavatar-names'),
  avatarRaw:  require('patchavatar-raw'),
  confirm:  require('patchconfirm-lightbox'),
  suggest: require('patchsuggest')
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
              localStorage.remote = ws
            })
          }).on('error', (e) => {
            console.log(e.message)
          })
        }
        id = api.identity.main()


        document.head.appendChild(h('style', require('./style.css.json')))
        document.body.appendChild(h('div.navbar',
          h('div.internal',
            h('li', h('a.Avatar', {href: '#' + id}, api.avatar.image(id))),
            h('li', h('a', {href: '#' + id}, api.avatar.name(id))),
            h('li', h('a', {href: '#'}, 'Public')),
            //h('li', h('a', {href: '#mentions'}, 'Mentions')),
            h('li', h('a', {href: '#private'}, 'Private')),
            h('li', h('a', {href: '#compose'}, 'Compose')),
            h('li', h('a', {href: '#key'}, 'Key')),
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
  require('patchcompose-drafts'),
  require('patchcompose-file')
])


