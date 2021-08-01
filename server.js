const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Express con HTML</h1><br> Hello world in Server AWS');
});

app.listen(8080);
console.log('Server on port 8080');