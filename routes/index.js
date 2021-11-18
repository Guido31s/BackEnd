const {Router} = require("express");
const router = Router();
let contenedor = require("../services/index");

function serverRouter(app) {
    
    app.use("/", router);

// EJS--------------------------------------------
    router.get("/productos-ejs", async (req, res, next) => {
        let response = await contenedor.getAll()
        res.render("pages/index", {response})
    })

    router.get("/productos-ejs/:id", async (req, res, next) => {
        let { id } = req.params
        let response = await contenedor.getProdById(parseInt(id))
        res.render("pages/index", {response})
    })

    router.post("/productos-ejs", (req, res) => {
        let obj = req.body;
        contenedor.newProd(obj);
        console.log(obj)
        res.redirect("/productos-ejs")
    })  

    router.put("/productos-ejs/:id", async (req, res) => {
        let {obj} = req.body
        let { id } = req.params
        let response = await contenedor.updateProduct(obj, parseInt(id))
        res.json(response)
    })
   

    router.delete("/productos-ejs/:id", async (req, res, next) => {
        let { id } = req.params
        let response = await contenedor.deleteById(parseInt(id))
        res.render("pages/index", {response})
    })

}




module.exports = serverRouter;