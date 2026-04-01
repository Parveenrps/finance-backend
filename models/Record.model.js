import mongoose, {Schema} from 'mongoose'

const recordSchema = new Schema({
    amount:{
        type: Number
    },
    type:{
        type: String,
        enum: ["income", "expense"]
    },
    category:{
        type: String
    },
    date:{
        type: Date,
        deafult : Date.now
    },
    note:{
        type: String
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const Record = mongoose.model("Record", recordSchema);