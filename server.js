//website url: https://peaceful-tundra-23221.herokuapp.com/


const express = require("express")
const app = express()
const path = require("path")
const multer = require("multer")

//setting PORT number
const HTTP_PORT = process.env.PORT || 8080
const HTTPstart = () => {
    console.log(`Express http server is listening on port: ${HTTP_PORT}`);
}

//setting middleware and static files
app.use(express.static("public"))

const upload = multer()


////setting routes////
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/resume.html"))
})

app.get("/download-cv", (req, res) => {
    res.download(path.join(__dirname, "public/Resume_Siran Cao.pdf"))
})

app.get("/download-cl", (req, res) => {
    res.download(path.join(__dirname, "public/Cover Letter_Siran Cao.pdf"))
})




app.listen(HTTP_PORT, HTTPstart)