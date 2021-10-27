const express = require("express");
const path = require("path")
const handlebars = require("express-handlebars")
require("dotenv").config()

const serverRoutes = require("./routes")

// Initializations
const app = express();

// Settings
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// PUG----------------------------------------------------
app.set("views", "./viewPug")
app.set("view engine", "pug")

// HBS----------------------------------------------------
// app.set('views', path.join(__dirname, 'viewHBS', "handlebars"));
// app.engine('handlebars', handlebars({defaultLayout: 'index' }));
// app.set('view engine', 'handlebars');

// EJS----------------------------------------------------
// app.set("views", path.join(__dirname, "views", "ejs"))
// app.set("view engine", "ejs")


//Middlewares
const cors = require("cors");
app.use(cors("*"));


//Pages
app.use("/productos", express.static(path.join(__dirname, "viewhbs")));

serverRoutes(app);

app.listen(process.env.PORT, ()=>{
    console.log(`Connected to URL:: http://localhost:${process.env.PORT}`)
});
app.on("error", err => console.log("Fallo de conexion al servidor", err));