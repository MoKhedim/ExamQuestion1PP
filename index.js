const fileSystem = require("browserify-fs")

let names = document.getElementById("name")
let phone = document.getElementById("phone")
let msg = document.getElementById("msg")
let btn = document.getElementById("btn")

let obj = {
    name: "",
    phone:  "",
    msg: ""
}

btn.addEventListener("click", function() {
    obj.name = names.innerHTML
    obj.phone = phone.innerHTML
    obj.msg = msg.innerHTML
    const data = JSON.stringify(obj)
    
fileSystem.writeFile("./newClient.json", data, err=>{
    if(err){
      console.log("Error writing file" ,err)
    } else {
      console.log('JSON data is written to the file successfully')
    }
})
})
