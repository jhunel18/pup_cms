const pool = require("../../db")
const authQuery = require("../queries/authQuery")
const brcypt = require("bcrypt")
const jwtGenerator = require('../utils/jwtGenerator')

const registerUser = async (req, res) =>{

    try {
        const { name, email, password } = req.body;
        const user = await pool.query(authQuery.checkEmailExists, [email]);

        //Check if user email exists
        if(user.rows.length !== 0){
            return res.status(401).send("User exists!")
        }
        // Use the Bcrypt to encrypt the password
        const saltRound = 10
        const salt = await brcypt.genSalt(saltRound);
        const brcyptPassword = await brcypt.hash(password, salt)

        //Insert new user to db
        const newUser = await pool.query(authQuery.createUser, [name, email, brcyptPassword]);
        // res.json(newUser.rows[0].user_id)

        //Generate JWT Token
        const token = jwtGenerator(newUser.rows[0].user_id)
        res.json({token})

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
};
 
const loginUser = async(req, res) =>{
    try{

        //destructure the body 
        const { email, password } = req.body

        //check if user does not exist(if not then throw error)
        const user = await pool.query(authQuery.checkEmailExists, [email]);
        
        if(user.rows.length === 0){
            return res.status(401).json("Incorrect Email or Password")
        }

        //check user input password is same in the database
        const validPassword = await brcypt.compare(password, user.rows[0].user_password)
        
        if(!validPassword){
            return res.status(401).send("Incorrect Email or Password!")
        }

        //Give the token once the password is correct
        const token = jwtGenerator(user.rows[0].user_id)
        res.json({token})

    }
    catch(error){
        res.status(500).json({error:error.message});
    }

}

module.exports = {
    registerUser,
    loginUser
}

