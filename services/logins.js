const mongoose = require('mongoose');

const employeeSchema = require('../models/employees');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../configs/controls')

employeeSchema.statics.findByToken = function(token) {
    
    // Employees : invoked by Employees.findByToken();
    // It is a new object
    const Employees = this;

    let decoded;

    try {

        decoded = jwt.verify(token, jwt_secret);
    
    } catch (e) {

        return Promise.reject();
    
    }

    return Employees.findOne({
    
        _id: decoded._id,

        // ***** when we call a property of property    
        "tokens[token]": token,
        "tokens[access]": "foods"
    
    });

};

mongoose.model('employeeLogin', employeeSchema);