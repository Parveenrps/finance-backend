import {User}from "../models/User.model.js";

export const getUsers =  async(req, res)=>{
    const users = await User.find().select("-password -token")
    res.status(200).json({users})
}

export const updateRole = async(req, res)=>{
    const {id} = req.params;
    const {role} = req.body;

    const user = await User.findByIdAndUpdate(id, {role}, {new: true}).select("-password -token")
    res.status(200).json({user})

}

export const updateStatus = async(req, res)=>{
    const {id} = req.params;
    const {isActive} = req.body;

    const user = await User.findByIdAndUpdate(id, {isActive}, {new: true}).select("-password -token")
    res.status(200).json({user})
}