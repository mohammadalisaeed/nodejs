let nodemailer = require("nodemailer")
require("dotenv").config()

let Email_Info = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})

let Email_Body={
    to:["samreenrafiq@aptechnorth.edu.pk","hunainhassan247@gmail.com","zainprogamer766@gmail.com "],
    from: process.env.EMAIL,
    subject:"Hello Everyone!",
    html:"<h6>Hi,,<br/>Hope You're Doing Well</h6><p>hehe</p>"
}

Email_Info.sendMail(Email_Body,function (error,info) {
    if (error) {
        console.log("Something Went Wrong")
        console.log(error)
    } else {
        console.log(`Email Has Been Sent To${Email_Body.to}`)
        console.log(info)
    }
    
})