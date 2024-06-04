import express from "express";
import {Value} from "@repo/common/config";
const app = express()

app.get("/", (req, res) => {
    res.json({
        message: `hello world ${Value}`
    });
})


app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})