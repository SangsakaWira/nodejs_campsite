const mongoose = require("mongoose")
var d = new Date();

mongoose.connect("mongodb://localhost/campsite",{useNewUrlParser:true})

const campsSchema = mongoose.Schema({
    name:String,
    desc:String,
    img:String,
    time:{type:String,default:d.toDateString()
    }
})

var camps = mongoose.model("Camps",campsSchema)

module.exports = camps