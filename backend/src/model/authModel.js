const pool = require("../../db")
const authQuery = require("../queries/authQuery")

const getUserByEmail = async (email) => {
    const { rows } = await pool.query(authQuery.emailExistsQuery, [email]);
    return rows[0];
};

const createUser = async (name, email, password) => {
    const values = [name, email, password];
    const { rows } = await pool.query(authQuery.createUserQuery, values);
    return rows[0];
};

module.exports = {
    getUserByEmail,
    createUser
}

