const fs=require('fs');
fs.writeFileSync("sample.txt","this is the sample txt for sync method")
    console.log("file writing completed")


console.log("after writing file")

const data=fs.readFileSync("sample.txt")
console.log(data.toString())

// in synchronous method we dont use callback funtion 