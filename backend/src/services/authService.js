const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const User = require('../model/User');

const registerUser = async (name, email, password) => {
    try {
        const existingUser = await User.findOne({ where: { user_email: email } });
        if (existingUser) {
            throw new Error('User exists already');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const newUser = await User.create({
            user_name: name,
            user_email: email,
            user_password: hashedPassword
        });

        const token = jwtGenerator(newUser.user_id);
        return { token };
    } catch (error) {
        console.error('Error registering user:', error);
        throw new Error('Registration failed');
    }
};

const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ where: { user_email: email } });
        if (!user) {
            throw new Error('User not found');
        }

        const validPassword = await bcrypt.compare(password, user.user_password);
        if (!validPassword) {
            throw new Error('Incorrect password');
        }

        const token = jwtGenerator(user.user_id);
        return { token };
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
};

module.exports = {
    registerUser,
    loginUser
};
