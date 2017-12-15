var h = require('hyperscript')
exports.gives = {
  app: { view: true }
}

exports.needs = {
  compose: { text: 'first' },
  confirm: { show: 'first' }
}

exports.create = function (api) {
  return { app: {
    view: function (path) {
      if(path !== 'compose') return
      var meta = {type: 'post'} //completely new message
      return api.compose.text(meta, {path: path}, function (content, context, cb) {
        api.confirm.show(content, context, cb)
      })
    }
  }}
}


