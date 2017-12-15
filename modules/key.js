var h = require('hyperscript')

exports.gives = {
  app: { view: true }
}

exports.needs = {
}

exports.create = function (api) {
  return { app: {
    view: function (path) {
      if(path !== 'key') return
      var importKey = h('textarea.import', {placeholder: 'import an existing public/private key', name: 'textarea'})
      var importRemote = h('input.import', {placeholder: 'import an existing remote', name: 'textarea'})
      var div = h('div.content', 
        h('div.message',
          h('h1', 'Your Key'),
          h('p', {innerHTML: 'Your secret key is: <pre><code>' + localStorage['/.ssb/secret'] + '</code></pre>'},
            h('button', {onclick: function (e){
              localStorage['/.ssb/secret'] = ''
              alert('Your public/private key has been deleted')
              e.preventDefault()
              location.hash = ""
              location.reload()
            }}, 'Delete Key')
          ),
          h('hr'),
          h('p', {innerHTML: 'Your remote pub is: <pre>' + localStorage.remote + '</pre>'},
            h('button', {onclick: function (e){
              localStorage.remote = ''
              alert('Your remote pub has been deleted')
              e.preventDefault()
              location.hash = ""
              location.reload()
            }}, 'Delete Pub')
          ),
          h('hr'),
          h('form.column',
            importKey,
            importRemote,
            h('button', {onclick: function (e){
              if(importKey.value) {
                localStorage['/.ssb/secret'] = importKey.value.replace(/\s+/g, ' ')
                e.preventDefault()
                alert('Your key has been updated')
              }
              if(importRemote.value) {
                localStorage.remote = importRemote.value
                e.preventDefault()
                alert('Your remote pub has been updated')
              }
              location.hash = ""
              location.reload()
            }}, 'Import')
          )
        )
      )
      return div 
    }
  }}
}


