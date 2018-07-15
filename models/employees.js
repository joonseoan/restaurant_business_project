const mongoose = require('mongoose');

// employee database
const { Schema } = mongoose;

const employeeSchema = new Schema ({

    employeeId : {

        type: String,
        required: true,
        trim: true,
        unique: true
        
    },
    password: { 

        type: String,
        required: true,
        trim: true,
        minlength: 8

    },
    tokens: [
        {
            accessKey: {
                type: String,
                require: true
            },
            token: {
                type: String,
                require: true
            }
        }
    ],
    email: {

        type: String,
        required: true,
        trim: true,
        unique: true

    },
    firstName: {

        type: String,
        required: true,
        trim: true,
        unique: true
        
    },
    lastName: {

        type: String,
        required: true,
        trim: true,
        unique: true

    },
    startDate: {
     
        type: Date,
        required: true
    
    },
    title: {

        type: String,
        required: true

    },
    position: {
        
        type: String,
        required: true

    },
    branchOffice: {

        type: String,
        required: true

    },
    street: {

        type: String,
        required: true

    },
    city: {

        type: String,
        required: true
    },
    province: {

        type: String,
        required: true
    },
    telephone: {

        type: String,
        
    },
    cellphone: {

        type: String,
        required: true
    }

});

const Employees = mongoose.model('employees', employeeSchema);

module.exports = { 
    
    Employees,
    employeeSchema

};