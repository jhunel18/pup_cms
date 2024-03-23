const authService = require('../services/authService')

const registerUser = async (req, res) =>{

    try {   
        const { name, email, password } = req.body;
        const response = await authService.registerUser(name, email, password)
        res.json(response)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
};
 
const loginUser = async(req, res) =>{
    try{

        //destructure the body 
        const { email, password } = req.body;
        const response = await authService.loginUser(email, password);
        res.json(response);
    }
    catch(error){
        if (error.message === 'User not found' || error.message === 'Incorrect password') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Login failed' });
        }
    }
}

const isVerify = async(req, res)=>{
    try{
        res.json(true);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}


module.exports = {
    registerUser,
    loginUser,
    isVerify
}

