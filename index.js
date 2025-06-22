const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    a = 2;
    b = 1;

    c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
