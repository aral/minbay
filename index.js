require('depject')(
  require('./modules_basic'),
  require('./modules_core')
).app[0]()

