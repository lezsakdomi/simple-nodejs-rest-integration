const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded())
app.use(express.json())

app.post('/execute', (req, res) => {
  console.log("Executing based on %o", req.body)
  const buffer = Buffer.from(req.body.text)
  const result = buffer.toString('base64')
  res.send(JSON.stringify(result, null, 4))
})

app.use(express.static('public'))

app.listen(port, () => console.log("Listening on port %d", port))
