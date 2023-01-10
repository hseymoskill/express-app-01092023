const express = require('express');

const app = express();
const PORT = process.env.PORT || 8085;

app.get('/', (req,res)=>{
    console.log(`incoming ${req.method} request`);
    res.send('Request received for home page')
})

// listen on port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})