var http = require("http");
const express = require("express");
var fs = require('fs');
const Cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(Cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
const db = require('./config/db.config');

db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: true }');
});
require('./app/routes/api/api.v1.routes')(app);
app.get('/',(req,res)=>{
    res.send("<h1>Do Not open again</h1>")
})

app.listen(5000,()=>{
    console.log("app listening at 5000")
})