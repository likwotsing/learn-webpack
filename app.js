const express = require('express')
const app = express()

// const cors = require('cors')
// app.use(cors())

// app.get('/api/getUserInfo', (req, res) => {
app.get('/getUserInfo', (req, res) => {
  res.send({
    name: 'andy',
    age: 18
  })
})

app.listen(9999, () => {
  console.log('http://localhost:9999')
})