const {Schema,model}=require('mongoose')

const registerSchema= new Schema({
    email: {type:String , required: true , unique:true},
    password: {type:String , required: true},
    username: String
})

const Register = model("Register",registerSchema)

module.exports= Register;