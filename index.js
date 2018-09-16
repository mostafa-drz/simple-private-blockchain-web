const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.status(200).send('Hi there');
});


app.use(express.static('client/build'));

const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
});
app.listen(process.env.PORT || 8000, (error) => {
    if (error) {
        console.log('Somethign went wrong when tried to start the server');
    } else {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    }
})