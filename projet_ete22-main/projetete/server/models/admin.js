const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
      password:{
        type:String,
        required:true,
        default:"0000",
    },
     
      email:{
        type:String,
        required:true,
        default:"admin@gmail.com",
      },
    
      timetable:[{
        title: String,
        startDate:  Date,
        endDate:Date,
        location: String,
      }],
    
      
    })
    mongoose.model("admin",adminSchema)