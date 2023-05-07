const express = require('express')
const app = express()
const port = 3000

app.get('/green', (req, res) => {
  res.send('Green Tui lam DevOps')
})

app.listen(port, () => {
  console.log(`Green listening on port ${port}`)
})