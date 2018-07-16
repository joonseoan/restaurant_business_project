const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const employeeSchema = require('../models/employees');
const { jwt_secret } = require('../configs/controls');

employeeSchema.methods.toJSON = function() {

    console.log('when am I supposed to do work?')
    
    // console.log("toJSON employees: ", this);
 
     const employees = this;
 
     // const backToUser = employees.toObject();
 
     return employees.toObject();;
 
 };
 
 employeeSchema.methods.buildToken = function() {

    console.log('when am I supposed to do work?')
     
    // this = employee because employee is an object of "model"
    // and employee invokes this function.
     const employee = this;
     
     const access = "foods";
     
     const token = jwt.sign({ id: employee._id.toHexString(), access }, jwt_secret ).toString();
 
     employee.tokens = employee.tokens.concat([{ access, token }]);
 
     return employee.save().then(() => {
 
         return token;
     
     });
 
 }

// For password encryption, bcrypt is implemented.
employeeSchema.pre("save", function(next) {

    const employee = this;

    // need to check if it is encoded
    //  when the new password is updated
    if (employee.isModified('password')) {
        
        console.log('isModified(_)', employee.isModified('password'))

        bcrypt.genSalt(10, (err, salt) => {
    
            bcrypt.hash(employee.password, salt, (err, hash) => {
    
                employee.password = hash;

                next();
    
            });
    
        });
    
    } else {
    
        Promise.reject();
        next();
    }

});

mongoose.model('employees', employeeSchema)