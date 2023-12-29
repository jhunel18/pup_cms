const pool = require("../../db")
const dashboardQuery = require("../queries/dashboardQuery")

const getAllUsers = async () => {
    
    const { rows } = await pool.query(dashboardQuery.getAllUsersQuery);
    return rows;
};
module.exports = {
getAllUsers
}