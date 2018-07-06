const express = require('express'),
  serveStatic = require('serve-static'),
  port = process.env.PORT || 3000,
  app = express()

app.use('/', serveStatic(__dirname))
app.listen(port, () => {
  console.log('server berjalan di ', port)
})
