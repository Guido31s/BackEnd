require("dotenv").config()


let config = {

    port: process.env.PORT || "3000",
    cors: process.env.CORS || "*",

}

module.exports = {config}