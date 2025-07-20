const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require("./db.js");
// const { age } = require('./notes.js');


app.get("/", (req, res) => {
   res.send("Welcome to mt server");
})

const personRoutes = require('./routes/person_routes.js')
const menuRoutes = require('./routes/menu_routes.js')

app.use("/person",personRoutes);
app.use("/menu",menuRoutes);

app.listen(3000, () => {
   console.log('listining to port 3000');
})