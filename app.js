const express = require('express');
const app = express();
app.use(express.json())

const routerFruits = require("./routes/fruits.js")

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use('/fruits', routerFruits)

module.exports = app