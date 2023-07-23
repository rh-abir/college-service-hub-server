const express = require("express");
const app = express();
const cors = require("cors")

const port = process.env.PORT || 5000;

// medleware 
app.use(cors())

app.get('/', (req, res) => {
    res.send('Collage service is running')
})

app.listen(port, () => {
    console.log(`Collage Api is running on port : ${port}`)
})