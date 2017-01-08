require('depject')(
  require('./modules_local'),
  require('./modules_basic'),
  require('./modules_core')
).app[0]()

