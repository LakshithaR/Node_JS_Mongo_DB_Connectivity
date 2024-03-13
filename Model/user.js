const mongoose=require('mongoose');
const { object } = require('underscore');
const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        sparse:true
    },
    age:{
        type:Number
    },
    familydetails:[{
        name:{
            type:String
        },
        relation:{
            type:String,
            enum:['father','mother','brother','sister']
        }
    }]
});

module.exports=mongoose.model('user',UserSchema);