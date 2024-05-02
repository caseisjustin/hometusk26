import http from "http"
import fs from "fs"
import path from "path"

const port = 7777

const ToDo = [
    {
        type: "breakfast",
        time: "01-03-2024",
    },
    {
        type: "dinner",
        time: "01-02-2024",
    }
]
http.createServer(async (req, res)=>{
    if(req.method == "GET" && req.url == "/"){
        let filepath = path.join(process.cwd(), "..", "FRONTEND", "index.html")
        res.writeHead(200, {"Content-Type": "text/html"})
        fs.readFile(filepath, (err, data)=>{
            if(err){
                console.log("Error reading file")
                res.end()
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.method == "GET" && req.url == '/style.css'){
        let filepath = path.join(process.cwd(), "..", "FRONTEND", "style.css")
        res.writeHead(200, {"Content-Type": "text/css"})
        fs.readFile(filepath, (err, data)=>{
            if(err){
                console.log("Error reading file")
                res.end()
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.method == "GET" && req.url == '/main.js'){
        let filepath = path.join(process.cwd(), "..", "FRONTEND", "main.js")
        res.writeHead(200, {"Content-Type": "text/javascript"})
        fs.readFile(filepath, (err, data)=>{
            if(err){
                console.log("Error reading file")
                res.end()
            }
            else{
                res.end(data)
            }
        })
    }
    else if(req.method == "POST" && req.url == "/add"){
        var buffers = []
        console.log("kp")
        req.on("end", (data)=>{
            buffers.push(data.toString())
        })

        req.on("end", ()=>{
            console.log(buffers)
        })
        // console.log(buffers)
        res.end(JSON.stringify({'hello':3}))
    }
    else if(req.method == "GET" && req.url == "/getdata"){
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(ToDo))
    }
}).listen(7777, err =>{
    if(err){
        console.log("An error occured")
        alert("Server error")
    }
    else{
        console.log("Server is running...")
    }
})