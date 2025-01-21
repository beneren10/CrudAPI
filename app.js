const express = require('express');
const app = express();
app.use(express.json())

const router = require("./routes/fruits.js")
const logger = require("./logger.js")

app.use('/',logger)

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use('/fruits', router)

module.exports = app