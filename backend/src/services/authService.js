const userModel = require('../model/authModel')
const bcrypt = require("bcrypt")
const jwtGenerator = require('../utils/jwtGenerator')



const registerUser = async(name, email, password) =>{
    const user = await userModel.getUserByEmail(email);

    if(user){
        throw new Error("User Exists Already")
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.createUser(name, email, hashedPassword);
    const token = jwtGenerator(newUser.user_id);

    return { token };
}

const loginUser = async(email, password)=>{
    const user = await userModel.getUserByEmail(email)
    if (!user) {
        throw new Error("Incorrect Email or Password");
    }

    const validPassword = await bcrypt.compare(password, user.user_password);

    if (!validPassword) {
        throw new Error("Incorrect Email or Password");
    }

    const token = jwtGenerator(user.user_id);
    return { token };

}

module.exports = {
    registerUser,
    loginUser
}