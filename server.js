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
// const db = require('./config/db.config');

// db.sequelize.sync({force: false}).then(() => {
//     console.log('Drop and Resync with { force: true }');
// });
require('./routes/api/api.v1.routes')(app);
app.get('/',(req,res)=>{
    res.send("<h1>Do Not open again</h1>")
})

app.listen(5000,()=>{
    console.log("app listening at 5000")
})

app.use(function (err, req, res, next) {
    console.log(err)
    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else {
        if (err.name === "SequelizeUniqueConstraintError") {
            res.status(500).json({ status: false, errors: err.errors });
        } else if (err.name === "SequelizeValidationError") {
            res.status(500).json({ status: false, errors: err.errors });
        } else {
            res.status(500).json({ status: false, message: "Something went wrong!!!" });
        }
    }
});