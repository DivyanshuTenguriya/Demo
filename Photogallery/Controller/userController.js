const userData = require('../model/Data.js');

const userInfo = (req, res) => {
    res.status(200).json({
        message: "User data retrieved successfully",
        userData
    });
};

module.exports = { userInfo };
