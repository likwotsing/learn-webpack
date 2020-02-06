const express = require('express')
const app = express()

app.get('/api/getUserInfo', (req, res) => {
  res.send({
    name: 'andy',
    age: 18
  })
})

app.listen(9999, () => {
  console.log('http://localhost:9999')
})