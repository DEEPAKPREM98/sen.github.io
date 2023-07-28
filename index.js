const express = require('express')
const app = express()
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs')
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, "/")));


//HOME PAGE
app.get('', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


//SERVICES PAGE
app.get('/services', function (req, res) {
    res.sendFile(path.join(__dirname, 'services.html'));
});


//ABOUT PAGE
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'about.html'));
});


//CONTACT ME PAGE
app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'contact.html'));
});


//RESULT PAGE
app.get('/h', function (req, res) {

    res.sendFile(path.join(__dirname, 'h.html'));
});

    

    





// SECOND = data comes from sentiment analysis page and store in b.json and in output.txt 1 comes.
app.post('/', function (req, res) {
    // converting input data to string
    var o = JSON.stringify(req.body)
    res.sendFile(path.join(__dirname, 'services.html'));
    fs.writeFileSync('b.json', o);
    fs.writeFileSync('output.txt', '1')
    fs.writeFileSync('result.txt', ' ')
    fs.appendFileSync('userdata.json', o);
});



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
