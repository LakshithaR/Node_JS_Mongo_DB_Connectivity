const express = require('express');

const connectdb = require('./db');

const app=express();

// Middleware to parse JSON bodies
app.use(express.json());

// // Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.get("/getuser", (request,response)=>{

    response.json({
        name:'Lakshitha',
    })
})

const UserRoute = require('./Routes/user');

app.use('/user',UserRoute);

connectdb('mongodb://localhost:27017').then(()=>{
    console.log("Database Connected");
    app.listen(5000,()=> {
        console.log("Server Running.");
    })
}).catch((err)=>{
    console.log(err);
});


app.post('/userpost',(req,res) =>{
    console.log(req.body);
    res.send(req.body);
    
})

/* const CreateUser = async(req,res) =>{
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
 */