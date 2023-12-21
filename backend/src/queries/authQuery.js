const emailExistsQuery = "SELECT * FROM users WHERE user_email = $1";
const createUserQuery = "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *"
// const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";

module.exports = {
   emailExistsQuery,
   createUserQuery
};