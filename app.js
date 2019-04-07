const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(20000, () => {
    console.log('working on 20000');

})