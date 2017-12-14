var isElectron = require('is-electron')
var h = require('hyperscript')
var HyperScroll = require('hyperscroll')
var fs = require('fs')
var path = require('path')

exports.gives = {
  nav: {
    screen: true, goto: true
  }
}

exports.needs = {
  app: {
    view: 'first',
    menu: 'map'
  }
}

exports.create = function (api) {
  var page = h('div.placeholder')
  var container = h('div.nav', page)

  function goto (str) {
    var el = container.firstChild
    if(el) el.dispatchEvent(new CustomEvent('blur', {target: el, removed: true}))
    window.location.hash = str
  }

  function index (str) {
    return h('div',
      str ? h('h1', 'error, unknown path:'+ str)
          : h('h1', 'go to:'),
      h('ul',
        api.app.menu().map(function (str) {
          return h('li', h('a', {href: str}, str))
        })
      )
    )
  }

  function load (str) {
    window.location.hash = str

    var el = api.app.view(str)
    if(el) {
      console.log(container, container.firstChild)
      container.replaceChild(el = HyperScroll(el), container.firstChild)
      el.dispatchEvent(new CustomEvent('focus', {target: page = el}))
    }
    /*else {
      container.replaceChild(index(str), container.firstChild)
    }*/
  }

  return {
    nav: {
      screen: function () {
        var str = window.location.hash.substring(1)

        window.onhashchange = function () {
          load(location.hash.substring(1))
        }

        load(str)

        return container
      },
      goto: goto
    }
  }
}


