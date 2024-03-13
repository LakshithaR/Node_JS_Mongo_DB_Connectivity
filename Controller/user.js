// const { mongo } = require('mongoose');
const UserSchema=require('../Model/user');
// const express = require('express');
// // const connectdb = require('./db');
// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));

const CreateUser = async(req,res) =>{
    const {
        name, email
    } = req.body;

    if(!name || !email){
        return res.json({
            Success: false,
            Message: "Name and Email are required"
        })
    }

    const data= await UserSchema.create({
        name: name,
        email: email 
    })
    res.json({
        Success: true,
        Message: "User Created Successfully",
        data
    });
    // res.send('Hello');
}

const getallusers =async(req,res) => {
    const users = await UserSchema.find({});
    res.json({
        Success: true,
        Message: "User Created Successfully",
        data: users
    })
}

module.exports={
    CreateUser,
    getallusers
};

