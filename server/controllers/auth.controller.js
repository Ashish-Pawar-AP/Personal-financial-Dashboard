import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const registerUser = async (req, res)=>{
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            res.status(401).json({message:"All fields are required"})
        }

        const isUserExists = await User.findOne({email})

        if(isUserExists){
            res.status(401).json({message:"User with email is already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name,
            email,
            password:hasedPassword,
        })

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"1d"
        })

        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token,
        })
    } catch (error) {
        console.log(`Something went wrong while registring user: ${error?.message}`);
        res.status(500).json({messgage:"Registration Failed"})
    }
}

const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body

        if(!email || !password){
            res.status(401).json({message:"All fields are required"})
        }

        const user = await User.findOne({email})
        if(!user){
            res.status(401).json({message:"User does not exists"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            res.status(401).json({message:"Invalid credentials"})
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"2d"
        })

        res.status(200).json({
            id:user._id,
            name:user.name,
            email:user.email,
            token
        })

    } catch (error) {
        console.log(`Something went wrong while login user: ${error?.message}`);
        res.status(500).json({message:"Login Failed"})
    }
}



export {registerUser, loginUser}