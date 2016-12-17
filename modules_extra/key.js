var h = require('hyperscript')
var u = require('../util')
var pull = require('pull-stream')
var Scroller = require('pull-scroll')

exports.gives = {
  menu_items: true, screen_view: true
}

exports.create = function (api) {
  return {
    menu_items: function () {
      return h('a', {href: '#/key'}, 'Import/Export')
    },
    screen_view: function (path, sbot) {
      if(path === '/key') {
        if(process.title === 'browser') {
          var importKey = h('textarea.import', {placeholder: 'import an existing public/private key', name: 'textarea'})
          var importRemote = h('textarea.import', {placeholder: 'import an existing remote', name: 'textarea'})
          var content = h('div.column.scroller__content')
          var div = h('div.column.scroller',
            {style: {'overflow':'auto'}},
            h('div.scroller__wrapper',
              h('div.column.scroller__content',
                h('div.message',
                  h('p', {innerHTML: 'Your secret key is: <pre><code>' + localStorage['browser/.ssb/secret'] + '</code></pre>'}),
                  h('form',
                    importKey,
                    h('button', {onclick: function (e){
                      localStorage['browser/.ssb/secret'] = importKey.value.replace(/\s+/g, ' ')
                      alert('Your public/private key has been updated')
                      e.preventDefault()
                      location.reload()
                    }}, 'Import'),
                    h('button', {onclick: function (e){
                      localStorage['browser/.ssb/secret'] = ''
                      alert('Your public/private key has been deleted')
                      e.preventDefault()
                      location.reload()
                    }}, 'Delete')
                  ),
                  h('p', {innerHTML: 'Your remote pub is: <pre>' + localStorage.remote + '</pre>'}),
                  h('form',
                    importRemote,
                    h('button', {onclick: function (e){
                      localStorage.remote = importRemote.value
                      alert('Your remote pub has been updated')
                      e.preventDefault()
                      location.reload()
                    }}, 'Import'),
                    h('button', {onclick: function (e){
                      localStorage['browser/.ssb/secret'] = ''
                      alert('Your remote pub has been deleted')
                      e.preventDefault()
                      location.reload()
                    }}, 'Delete')
                  )
                )
              )
            )
          )
          return div
        } else { 
          return h('p', 'Your key is saved at .ssb/secret')
        }
      }
    }
  }
}

