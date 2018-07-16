const mongoose = require('mongoose');

// employee database
const { Schema } = mongoose;

module.exports = new Schema ({

    employeeId: {

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
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
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
        trim: true
        
    },
    lastName: {

        type: String,
        required: true,
        trim: true

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