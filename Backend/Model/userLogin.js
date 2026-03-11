const mongoose=require("mongoose")
const dataSchema=mongoose.Schema({
    userName:{
        type:String,required:true
    },
    userEmail:{
        type:String,required:true
    },
      userPassword:{
        type:String,required:true
    },
})

const DataModal=mongoose.model("userSignUp",dataSchema)
module.exports=DataModal