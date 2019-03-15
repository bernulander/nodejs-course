const express = require('express')
require('./db/mongoose')
const User = require('./models/user')

const app = express()
// Get PORT value for herokue deployment from process.env.PORT
const port = process.env.PORT || 3000

// Automatically parses incoming json to an object so we can access it in our request handlers
app.use(express.json())

app.post('/users', (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then(() => {
      res.send(user)
    })
    .catch(error => {
      // res.status(400)
      // res.send(error)
      // In One line ->
      // res.send(error, 400)
      res.status(400).send(error)
    })
})

app.listen(port, () => {
  console.log('Server Running on port ' + port)
})
