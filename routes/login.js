// const _ = require('lodash');
const mongoose = require('mongoose');

const Employees = mongoose.model('employees');

// app.get('/employees/me', authenticate, (req, res) => {

//     res.send(req.user);

// });

module.exports = (app) => {

    app.post('/employees/login', async (req, res) => {

        try {
    
            const body = _.pick(req.body, [ 'employeeId', 'password' ]);
    
            const employee = await Employees.findByCredentials(body.employeeId, body.password);
    
            const token = await user.generateAuthToken();
    
            res.header('x-auth', token).send(employee);
    
        } catch (e) {
    
            res.status(400).send();
    
        }
            
    });

}