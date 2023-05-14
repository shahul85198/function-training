// toread files one by one

const fs = require("fs")

fs.readFile("fileone.txt", function(err, data) {
    if(data) {
        console.log("file one data")
    }
})