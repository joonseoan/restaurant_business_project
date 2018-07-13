const mongoose = require('mongoose');

// employee database
const { Schema } = mongoose;

const employeeSchema = new Schema ({

    employeeId : String,
    password: String,
    startDate: Date,
    title: String,
    position: String,
    branch: String,
    email: String,
    firstName: String,
    lastName: String,
    street_add: String,
    city: String,
    province: String,
    telephone: String,
    cellphone: String

});

mongoose.model('employees', employeeSchema);