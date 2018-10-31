const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.end('Hello Express!')
});

app.listen(8000, () => {
    console.log('Example app lisrening on port 8000')
});