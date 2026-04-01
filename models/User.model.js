import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["viewer", "analyst", "admin"],
        default: "viewer"
    },
    isActive:{
        type: Boolean,
        default: true
    }

    
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);