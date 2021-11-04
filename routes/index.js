const {Router} = require("express");
const router = Router();
let contenedor = require("../services/index");

function serverRouter(app) {
    
    app.use("/", router);
    
    app.get("/", (req, res) =>{
    res.send(true)
    })


// EJS--------------------------------------------
    router.get("/productosEJS", (req, res) => {
        let response = contenedor.getAll()
        res.render("pages/index", {response})
    })

    router.post("/productosEJS", (req, res) => {
        let obj = req.body;
        contenedor.newProd(obj);
        console.log(obj)
        res.redirect("/productosEJS")
    })

// PUG-------------------------------------------
//     router.get("/productosPUG", (req, res) => {
//         let response = contenedor.getAll()
//         res.render("form/form", {response})
//     })

//     router.post("/productosPUG", (req, res) => {
//         let obj = req.body;
//         contenedor.newProd(obj);
//         console.log(obj)
//         res.redirect("/productosPUG")
//     })
// //HBS--------------------------------------------
// router.get("/productosHBS", (req, res) => {
//     let response = contenedor.getAll()
//     res.render("layouts/index", {response})
// })
// router.post("/productosHBS", (req, res) => {
//     let obj = req.body;
//     contenedor.newProd(obj);
//     console.log(obj)
//     res.redirect("/productosHBS")
// })

//     router.get("/api/productos", (req, res)=> {
//         let response = contenedor.getAll();
//         res.json(response)
//     })
    
//     router.get("/api/productos/:id", (req, res)=> {
//         let { id } = req.params
//         let response = contenedor.getProdById(parseInt(id));
//         res.json(response)
//     })
    
    
//     router.post("/api/productos", (req, res) =>{
//         let obj = req.body;
//         let prod = contenedor.newProd(obj)
//         res.json(prod)
    
//     })
    
//     router.put("/api/productos/:id", (req, res) => {
//         let { id } = req.params
//         let response = contenedor.updateProduct(req.query, parseInt(id))
//         res.json(response)
//     })
    
//     router.delete("/api/productos/:id", (req, res)=> {
//         let { id } = req.params;
//         let response = contenedor.deleteById(parseInt(id));
//         res.json(response)
//     })
    
}




module.exports = serverRouter;