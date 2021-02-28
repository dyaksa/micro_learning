const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

mongoose.connect(`
mongodb://localhost:27017/studext`,
{useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
   app.listen(8000, () => {
     console.log("running");
   })
}).catch(err => {
    throw err
})