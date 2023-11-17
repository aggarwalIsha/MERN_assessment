const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mernAssessment",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("connection to mongodb is successful!!")
}).catch((err)=>{
    console.log(err)
})

const user = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
    });
    
    const userInfo = new mongoose.model('storeUserInfo', user );

    app.get("/get_api/signInInfo/:email", async (req, res) => {
        const userEmail = req.params.email;
        try {
            let userInformation = await userInfo.findOne({ email: userEmail });
    
            if (userInformation) {
                res.status(200).json({
                    success: true,
                    userInformation
                });
            } else {
                res.status(404).json({ error: "email not found" });
            }
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "OOPS!! Couldn't fetch",
            });
        }
    });

    app.put("/put_api/signInInfo/:email", async (req, res) => {
        const userEmail = req.params.email;
        const userName = req.body.name; 
        const userPassword = req.body.password;
    
        try {
            const existingUser = await userInfo.findOne({ email: userEmail });
            if (existingUser) {
                res.status(200).json({
                    success: true,
                    existingUser: existingUser
                });
            } else {
                const newUser = new userInfo({ email: userEmail, name: userName, password: userPassword });
                await newUser.save();
                res.status(201).json({
                    success: true,
                    existingUser: newUser
                });
            }
        } catch (error) {
            res.status(500).json({ error: "OOPS!! Couldn't update email" });
        }
    });

app.listen(5000,()=>{
    console.log("Localhost working at port 5000")
})