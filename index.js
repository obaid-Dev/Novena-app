var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
const PORT=5000;
app.use(cors());
app.use(express.json());


//including the database field
const User = require('./Models/User');
const { application } = require('express');

//Connecting mongodb
mongoose.connect("mongodb://127.0.0.1:27017/fullstackfinalproject",{ useNewUrlParser: true });

//Checking whether mongodb has been connected or not
mongoose.connection.once('open',() => {
    console.log('mongodb connected!!');
})

//api for getting data
app.post('/Create', (req,res)=>{
    const user = new User(req.body);

    //finally saving the data into database 
    user.save().then((use) => {
        res.json(use);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
})

//api for showing the data 
app.get('/Show', (req,res)=>{
    User.find((err,users)=>{
        if(err){
            console.log(err); 
        }
        else{
            //getting the output in json format
            res.json(users);
        }
    })
})

//api for showing the data 
app.get("/Show/:id", (req,res)=>{
    const id = req.params.id;

    User.findById(id,(err,users)=>{
        if(err){
            console.log("data against id is not found"); 
        }
        else{
            //getting the output in json format
            res.json(users);
        }
    })
})

//api for updating the data
app.post("/Create/:id", (req,res)=>{
    const id = req.params.id;
    
    User.findById(id, (err,users)=>{
        if(!users){
            res.status(404).send("Id not found");
        }
        else{
            //getting new input in mongodb columns
            users.Name = req.body.Name;
            users.Email = req.body.Email;
            users.Topic = req.body.Topic;
            users.Number = req.body.Number;
            users.Message = req.body.Message;

            //saving updated data
            users.save().then((user)=>{
                res.json(user);
            }).catch((err)=>res.status(500).send(err.message));
        }
    })
})

//api for deleting data 
app.get("/Create/:id", (req, res)=>{
    const id = req.params.id;

    User.findByIdAndDelete(id, (err, users)=>{
        if(!err){
            res.json(users);
        }
        else{
            console.log('Failed to delete user Details');
        }
    })
})

app.listen(PORT, ()=> {
    console.log("Port has been established!");
})