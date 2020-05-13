const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()

app.set('port', process.env.PORT || 3000)

app.use('/statics', express.static(path.resolve(__dirname, '../public')))
app.use(require('./routes'))

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})