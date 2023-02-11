// const exp = require('constants')
// const express=require('express')
// const app=express()

// const middleware=(req,res,next)=>{
// console.log("its middleware")
// next()
// }
// app.use(middleware)



// app.get("/",(req,res)=>{   //read 
//    res.send("get request")
// })
// app.post("/",(req,res)=>{   //create,save
// res.send("post request")
// })
// app.put("/",(req,res)=>{    //update
//     res.send('put request')
// })
// app.delete('/',(req,res)=>{     // DELETE
//     res.send('delete request')
// })
// const PORT=3000
// app.listen(PORT,()=>console.log("Server is running at 3000"))

// ExpressRESTAPI2
const express = require('express')
const app = express()
const members = [{
    id: 1,
    name: "ramu",
    email: "ramu@gmail.com",
    status: "active"
},
{
    id: 2,
    name: "rohan",
    email: "rohn@gmail.com",
    status: "active"
},
{
    id: 3,
    name: "raka",
    email: "raka@gmail.com",
    status: "inactive"
}]
app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})
app.get("/showUser/:uid",(req,res)=>{
   const id=req.params.uid

    const user=members.filter(members=>members.id === parseInt(id))
    user.length!=0 ? res.status(200).json(user) : res.status(200).json({msg:"user not found"})
})

 const PORT=3000
 app.listen(PORT,()=>console.log("Server is running at 3000"))