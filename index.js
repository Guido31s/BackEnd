const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const serverRoutes = require("./routes")
const path = require("path")

app.use("/html", express.static(path.join(__dirname, "views")));

app.get("/", (req, res) =>{
    res.send(true)
})
serverRoutes(app);

app.listen(process.env.PORT, ()=>{
    console.log(`Connected to URL:: http://localhost:${process.env.PORT}`)
});
app.on("error", err => console.log("Fallo de conexion al servidor", err));