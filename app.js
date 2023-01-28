const express = require("express");
const {request, response} = require("express");
const aboutMe = require("./aboutMe");
const contacts = require("./contacts");
const main = require("./main");
const shop = require("./shop");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));

app.get('/students', (req, res) => {
    console.log(req.headers)
    const student = {
        name: "Влад",
        group: "ИС-22-11",
        age: 17
    }
    res.json(student)
})

app.get('/', (request, response) => {
    response.send(main)
})

app.get('/shop', (request, response) => {
    response.send(shop)
})

app.get('/contact', (request, response) => {
    response.send(contacts)
})

app.get('/aboutme', (request, response) => {
    response.send(aboutMe)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000")
})