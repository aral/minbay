var h = require('hyperscript')
var HyperScroll = require('hyperscroll')
var fs = require('fs')
var path = require('path')

exports.gives = {
  nav: {
    screen: true
  }
}

exports.needs = {
  app: {
    view: 'first'
  }
}

exports.create = function (api) {
  var page = ''
  var container = h('div.nav', page)

  function load (str) {
    window.location.hash = str

    var el = api.app.view(str)
    if(el) {
      console.log(container, container.firstChild)
      container.replaceChild(el = HyperScroll(el), container.firstChild)
      el.dispatchEvent(new CustomEvent('focus', {target: page = el}))
    }
    else {
      container.replaceChild(index(str), container.firstChild)
    }
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
      }
    }
  }
}


