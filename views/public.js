var h = require('hyperscript')
var pull = require('pull-stream')
var ref = require('ssb-ref')
var More = require('pull-more')
var scroller = require('hyperloadmore/stream')
var viewMenu = require('./junk/view-menu')

exports.needs = {
  sbot: { createLogStream: 'first' },
  message: {layout: 'first'},
  app: {viewMenu: 'map'}
}

exports.gives = {
  app: {menu: true, view: true}
}

exports.create = function (api) {
  return {
    app: {
      view: function (src) {
        if(src !== '') return

        var content = h('div.content', viewMenu(api.app.viewMenu(src)))

        function createStream (opts) {
          return pull(
            More(api.sbot.createLogStream, opts),
            pull.filter(function (data) {
              return 'string' === typeof data.value.content.text
            }),
            pull.map(api.message.layout)
          )
        }

        pull(
          createStream({old: false, limit: 100}),
          scroller.top(content)
        )

        pull(
          createStream({reverse: true, live: false, limit: 100}),
          scroller.bottom(content)
        )


        return content
      },
      menu: function () {
        return 'public'
      }
    }
  }
}

