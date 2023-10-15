const User = require('../models/user')


module.exports = {
    register(req, res) {
        const user = req.body
        User.create(user, (err, data) =>{
           if (err) {
               return res.status(501).json({
                   success: false,
                   message: 'There was an error with the User registration',
                   err
               })
           }
           return res.status(201).json({
               success: true,
               message: 'User was created successfully',
               data
           })
        });
    }
}