var h = require('hyperscript')
var u = require('../util')
var pull = require('pull-stream')
var Scroller = require('../pull-scroll')

exports.gives = {
  screen_view: true
}

exports.create = function (api) {
  return {
    screen_view: function (path, sbot) {
      if(path === 'Edit Profile') {
        var identify = h('input.identify', {placeholder: 'Your Name', name: 'namespace'})

        var newName = h('button', 'Save', {onclick: function (e) {
          if(identify.value)
            api.publish({
              type: 'about',
              about: id,
              name: identify.value || undefined,
              }, location.hash = ''
            ),
            e.preventDefault()
          }})

        var div = h('div.column.scroller',
          {style: {'overflow': 'auto'}},
          h('div.scroller__wrapper',
            h('div.column.scroller__content',
              h('div.message',
                h('h1', 'Edit Your Profile'),
                h('form',
                  identify,
                  newName
                )
              )
            )
          )
        )
        return div
      }  
    }
  }
}

