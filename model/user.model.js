const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({

    name: String,
    email: String(Unique),
    mobileNumber: String,
    password: String,
    role: Enum [admin, doctor, patient],
    specialization: Enum[nerves, heart, lungs, skin], default: "doctor",
    availableDays: Enum[Sun, Mon, Tue, Wed, Thu, Fri, Sat], default: "doctor"

})

const UserModel = mongoose.model("User", UserSchema)

module.exports = userModel