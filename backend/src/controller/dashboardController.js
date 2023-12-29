const dashboardService = require('../services/dashboardService')
// const pool = require("../../db")

const dashboard = async(req, res)=>{
    try {   
        const response = await dashboardService.getAllUsers()
        res.json(response)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    dashboard
}

