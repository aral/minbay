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
                  h('h1', 'Minbay - A client for distributed social cyphernetworking'),
                  h('p', 'Hello World')
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

