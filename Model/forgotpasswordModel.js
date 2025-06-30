const mongoose = require("mongoose");

const forgotPasswordSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true, unique:true },
    OTP: { type: String, required: true, trim: true,}
})

const forgotPasswordModel = mongoose.models.forgotpassword || mongoose.model("forgotpassword", forgotPasswordSchema)
module.exports = {forgotPasswordModel}