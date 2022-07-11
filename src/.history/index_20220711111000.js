const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000

// For testing purpose
app.get("/", (req, res) => {
            res.send( < h2 > It 's working!</h2>)
            })

        app.listen("/", (req, res) => {
            console.log(`API is listening on Port ${PORT}`)
        })