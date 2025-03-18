let bcrypt = require("bcryptjs")

let mypswd = "Ali@yahoo123"
let salt = 10;
let encrypted_pswd = bcrypt.hashSync(mypswd,salt)

let check = bcrypt.compareSync(mypswd,encrypted_pswd)
if (check) {
    console.log("Password Is Matched Successfully")
} else {
    console.log("Password Is Not Matched Try Again")
}

console.log(`Original Password ${mypswd}\nEncrypted Password ${encrypted_pswd}`)