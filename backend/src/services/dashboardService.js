const dashboardModel = require('../model/dashboardModel')

const getAllUsers = async()=>{
    const users = await dashboardModel.getAllUsers()
    return users
}

module.exports ={
    getAllUsers
}