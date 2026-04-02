import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User} from '../models/User.model.js'

const register = async (req, res)=>{
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({message: "Please provide name, email and password"})
    }

    const existingUser = await User.findOne({email})

    if(existingUser){
        return res.status(409).json({message: "User already exists"})
    }

    const hashedPassword = await bacrpt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    })

    await newUser.save()
    res.status(201).json({newUser, message: "User created successfully"})
}

const login = async (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({message: "Please provide email and password"})
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message: "User not found"})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        return res.status(401).json({message: "Invalid credentials"})
    }

    const token = jwt.sign(    
        {
            id: user._id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )
    user.token = token;
    await user.save();
    
    res.status(200).json({ token, message: "Login successful"})

}

export {register, login}