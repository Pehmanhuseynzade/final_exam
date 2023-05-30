const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(bodyParser.json())
dotenv.config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const bloggerSchema = new mongoose.Schema({
     name: String, 
     price: Number,
     desc: String,
     image:String
   });

const blogModel = mongoose.model('Blogger', bloggerSchema);

app.post(`/api/blogger`,async(req,res)=>{
     const{name,price,desc,image} = req.body
     const newPost = new blogModel({
          name:name,
          price:price,
          desc:desc,
          image:image,
     })
     await newPost.save()
     res.status(201).send({
          message:"Posted Succesfully!",
          payload:newPost
     })
})

app.get(`/api/blogger`,async(req,res)=>{
     const{name}=req.query
     const newGet = await blogModel.find()
     if(!name){
          res.status(200).send(newGet)
     }
     else{
          const searched = newGet.filter((x)=>
          x.name.toLowerCase().trim().includes(name.toLowerCase().trim())  
          )
          res.status(200).send(searched)
     }
})

app.get(`/api/blogger/:id`,async(req,res)=>{
     const {id} = req.params
     const newID = await blogModel.findById(id)
     res.status(200).send(newID)
})

app.delete(`/api/blogger/:id`,async(req,res)=>{
     const id=req.params.id
     const newDelete = await blogModel.findByIdAndDelete(id)
     res.status(202).send(newDelete)
})




PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION

mongoose.connect(DB_CONNECTION.replace('<password>',DB_PASSWORD)).then(()=>{
     console.log("MongoDB Connected!!!Bashladimm")
});
