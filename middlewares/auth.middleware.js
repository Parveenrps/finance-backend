import { User } from "../models/User.model.js";


export const verifyToken = async (req, res, next) =>{
    const token = req.headers.authorization?.replace("Bearer ", "") || req.cookies?.token;

    if(!token){
        return res.status(401).json({message: "No token provided"})
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedToken.id);

    if(!user){
        return res.status(401).json({message: "invalid token"})
    }

    req.user = user;
    next()
}
