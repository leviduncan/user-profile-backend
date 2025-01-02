const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    title: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    gender: { type: String, required: false },
    img: { type: String, required: false },
    admin: { type: String, required: false }
})

module.exports = mongoose.model("Users", UserSchema)