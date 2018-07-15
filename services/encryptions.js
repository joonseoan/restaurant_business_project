const jwt = require('jsonwebtoken');

const { employeeSchema } = require('../models/employees');

// console.log('employeeSchema: ', employeeSchema);

employeeSchema.method.buildingToken = function() {

    console.log('process.env.JWT_SECRET? : ', process.env);

    const employee = this;

    console.log('this: ', this)
    console.log('employeSchema.method: ', employeeSchema.method)

    const accessKey = 'foods';

    // _id
    const token = jwt
        .sign({ id: employee.id.toHexString(), accessKey }, process.env.JWT_SECRET)
        .toString();

    
    employee.tokens = employee.tokens.concat([{ accessKey, token }]);
    
    return employee.save().then(() => {

        return token;

    });

}


