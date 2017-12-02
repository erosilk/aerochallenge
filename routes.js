const routes = module.exports = require('next-routes')()

routes
    .add('/product/:id', 'product')
    .add('/product/:id/:name', 'product')

