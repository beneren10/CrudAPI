const express = require('express');
const cors = require('cors')
const app = express();

app.use (cors())
app.use(express.json())

const router = require("./routes/fruits.js")
const logger = require("./logger.js")

app.use('/',logger)

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use('/fruits', router)

module.exports = app