const express =require('express')
const { signup, signin, forgotPassword, verifyPassword, resetPassword, tokenverification } = require('../Controller/UserController')
const {validate} =require('../Middlewares/userValidator');
const { userValidator, loginValidator } = require('../Middlewares/userValidate');
const Router =express.Router()

Router.post("/signup", validate(userValidator), signup)
Router.post("/signin",validate(loginValidator),signin)
Router.get("/homepage", tokenverification)
Router.post("/forget",forgotPassword)
Router.post("/verify",verifyPassword)
Router.post("/reset",resetPassword)


module.exports = Router