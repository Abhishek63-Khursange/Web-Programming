const fs=require('fs');
fs.writeFile("Demo.txt","this is the file read function withour call back ",()=>{
    console.log("write operation complete");//4
});
console.log("after writing into file"); //1


console.log("--------------file reading-------------")//2
fs.readFile("demo.txt",(error,data)=>{
if(error){
    console.log(error)
}
else{
    console.log(data.toString());//5
}
})
console.log("after read")//3