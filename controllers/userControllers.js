const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userControllers = {

    newUser: async(req, res) => {
        let {name,lastName, email, img, password, address, phoneNumber, admin, workers, google} = req.body;    
        
        try {

            const userExist = await User.findOne({email})
            if (userExist){
                res.json({success: false, error:"The email user is already in use", response:null})
            }else{

                password= bcryptjs.hashSync(password, 10)

                const newUser = new User({
                    name,
                    lastName,
                    email, 
                    img,
                    password,
                    address,
                    phoneNumber,
                    admin,
                    workers,
                    google
                })

                const token = jwt.sign({ ...newUser }, process.env.SECRET_KEY);
               
                await newUser.save()
                res.json({success: true, response: {token,newUser}, error: null})
            }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },
    loginAccount: async(req,res) =>{
        const {email,password,google} = req.body
        
        try{
            const userExist = await User.findOne({email})
            if (!userExist){
                res.json({success: false, errores:[{messages:"The email user is already in use"}], response:null})
            }else{
                let passwordMatch = bcryptjs.compareSync(password, userExist.password)
                if (passwordMatch) {
                    const token = jwt.sign({ ...userExist }, process.env.SECRET_KEY);
                    console.log(token)
                    res.json({success:true, response:{token,email, img:userExist.img} ,error:null})
                }else{
                    res.json({success: true, error:"Incorrect username or password"});
                }
                if (userExist.google && !google) throw new Error ("Invalid email");
            }
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },
    tokenVerification: (req, res) => {
        res.json({name: req.user.name, img: req.user.img, _id: req.user._id})
    }
};
module.exports = userControllers;