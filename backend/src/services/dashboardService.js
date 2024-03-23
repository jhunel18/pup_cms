const User = require('../model/User');

const getAllUsers = async()=>{
    try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        // Handle error
        console.error('Error fetching users:', error);
        throw error;
      }
}

module.exports ={
    getAllUsers
}