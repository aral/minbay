var h = require('hyperscript')
var pull = require('pull-stream')
var ref = require('ssb-ref')
var More = require('pull-more')
var scroller = require('hyperloadmore/stream')

exports.needs = {
  sbot: { createLogStream: 'first' },
  message: {layout: 'first'}
}

exports.gives = {
  app: {view: true, menu: true}
}

exports.create = function (api) {
  return {
    app: {
      view: function (src) {
        if(src !== 'public') return

        var content = h('div.content')

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

