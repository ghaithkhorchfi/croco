const express= require('express');
const app= express();
const mongoose= require('mongoose');
const bcrypte=require('bcrypt');
mongoose.connect('mongodb://localhost:27017/meanDB');
//mongoose.connect('mongodb+srv://Gaith:crococoder@cluster0.9xpec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

const Match=require('./models/match')
const Player=require('./models/player')
const Team=require('./models/team')
const User=require('./models/user')
// import body parser module
const bodyParser = require("body-parser");
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));
// busness logic to add match
//adress base /
app.post('/match',(req,res)=>{
    const matchObj= new Match({
        teamOne:req.body.teamOne,
        teamTwo:req.body.teamTwo,
        scoreOne:req.body.scoreOne,
        scoreTwo:req.body.scoreTwo
    })
    matchObj.save();
})
app.get('/match',(req,res)=>{
    Match.find((err,docs)=>{
        console.log('docs',docs);
        if(err){
            console.log(err);
        }
        else {
            res.status(200).json({matches:docs})
        }
    })
})
app.delete('/match/:id',(req,res)=>{
    Match.deleteOne({_id:req.params.id}).then((result)=>{
        console.log('after result',result);
        if(result){
            res.status(200).json({msg:'delete with success'})
        }
    })
})
app.get('/match/:id',(req,res)=>{
    console.log('my id',req.params.id);
    Match.findOne({_id:req.params.id}).then((result)=>{
        console.log(result);
        if( result){
            res.status(200).json({match:result})
        }
    })
})
app.put('/match/:id',(req,res)=>{
    console.log('id:',req.params.id);
    console.log('objet:',req.body);
    const newObj= new Match({
        _id:req.body._id,
        teamOne:req.body.teamOne,
        teamTwo:req.body.teamTwo,
        scoreOne:req.body.scoreOne,
        scoreTwo:req.body.scoreTwo

    });
    Match.updateOne({_id:req.params.id},newObj).then((result)=>{
        if(result){
            res.status(200).json({msg:'done'});
        }
    })
})
app.post('/player',(req,res)=>{
    const playerObj=new Player({
        name:req.body.name,
        num:req.body.num,
        team:req.body.team,
        age:req.body.age,
        poste:req.body.poste
    })
    playerObj.save()
})
app.get('/player',(req,res)=>{
    Player.find((err,docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).json({players:docs})
        }
    })
})
app.delete('/player/:id',(req,res)=>{
    Player.deleteOne({_id:req.params.id}).then((result)=>{
        if(result){
            res.status(200).json({msg:'player deleted'})
        }
    })
})
app.get('/player/:id',(req,res)=>{
    Player.findOne({_id:req.params.id}).then((result)=>{
        if(result){
            res.status(200).json({player:result})
        }
    })
})
app.put('/player/:id',(req,res)=>{
    const newObj=new Player({
        _id:req.body._id,
        name:req.body.name,
        num:req.body.num,
        team:req.body.team,
        age:req.body.age,
        poste:req.body.poste
    })
    Player.updateOne({_id:req.params.id},newObj).then((result)=>{
        if(result){
            res.status(200).json({msg:'updated'})
        }
    })
})

app.post('/users/signUp',(req,res)=>{
    bcrypte.hash(req.body.pwd,10).then((result)=>{
        const userObj= new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:result
    
        });
        userObj.save();
        console.log(userObj);
    })
})
app.post('/users/login',(req,res)=>{
    console.log('Here login', req.body);
    User.findOne({email:req.body.email}).then(
        (emailResult)=> {
            if (!emailResult) {
                res.status(200).json({
                    message:'0'
                })
            }
            return bcrypte.compare(req.body.password, emailResult.password)
        }
    ).then(
       (pwdResult) => {
           if (!pwdResult) {
            res.status(200).json({
                message:'1'
            })
           }
           User.findOne({email:req.body.email}).then(
               (result)=>{
                   let userToSend = {
                       firstName: result.firstName,
                       lastName: result.lastName
                   }
                   res.status(200).json({
                       user:userToSend,
                       message: '2'
                   })
               }
           )
       }
    )
});



module.exports=app;