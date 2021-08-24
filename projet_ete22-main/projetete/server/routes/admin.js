const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Employe = mongoose.model("employe");
const Admin = mongoose.model("admin");
const RequireLoginAdmin= require('../middleware/requireLoginAdmin')
router.get("/employeesaffectation",(req,res)=>{
    Employe.find()
    .then(resultat=>res.json(resultat))
})

router.get("/clientaffectation",(req,res)=>{
    User.find({employe:null})
    .then(resultat=>res.json(resultat))
})
router.put("/affectation",(req,res)=>{
    const client = req.body.client
    const employee = req.body.employe
    User.findOne({_id:client})
    .then(resulat=>{
        resulat.employe = employee
        resulat.save()
        .then(resulats=>res.json(resulats))
    })
})

router.get("/clientsEmplois",(req,res)=>{
    User.find()
    .then(resultat=>res.json(resultat))
})
router.put("/clientEmploisFinale",(req,res)=>{
    Admin.findByIdAndUpdate('611bf3cddb4f5b52341c2de1', {
        $push: { timetable: {title:req.body.title, startDate:req.body.startDate, endDate:req.body.endDate} }
    }, {
        new: true
    })
   .then(resulat=>{
    Employe.findByIdAndUpdate(req.body.employe, {
        $push: { Notification: {text:req.body.title,client:req.body.nomclient} }
    }, {
        new: true
    }).then(resulat2=>{
        User.findByIdAndUpdate(req.body.client, {
            $push: { Notification: {text:req.body.title,employee:req.body.nomemployee} }
        }, {
            new: true
        }).then(ress=>res.json(ress))
    })
   })
})
router.get('/emploisAdmin',(req,res)=>{
    Admin.findOne({_id:'611bf3cddb4f5b52341c2de1'})
    .then(resulat=> 
        { 
         for(let i=0;i<resulat.timetable.length;i++){
        resulat.timetable[i].id = i
      }  
      res.json(resulat.timetable)}
      )
})
router.put('/deleteappointement',(req,res)=>{
   
    Admin.findByIdAndUpdate('611bf3cddb4f5b52341c2de1', {
        $pull: { timetable: req.body.data }
    }, {
        new: true
    }).then(resulat=>res.json(resulat))
})
module.exports = router;