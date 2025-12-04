import mongoose from "mongoose";

const botSchema = new mongoose.Schema({
    
    text:{
        type:String,
        required:true,
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

//make  user model

const Bot=mongoose.model("Bot",botSchema)
export default Bot;