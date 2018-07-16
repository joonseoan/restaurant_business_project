const _ = require('lodash');
const mongoose = require('mongoose');

const Employees = mongoose.model('employees');

module.exports = (app) => {

    app.post('/employees', async (req, res) => {

        const employees = new Employees(req.body);

        try {
            
            await employees.save();
            
            // "buildToken" is a child property of employees containing schema(methods)
            // Therefore "this" in the methods is "employee"
            const token = await employees.buildToken();

            console.log('when am I supposed to do work?')
            
            const resEmployeeInfo = _.pick(employees, [ 'employeeId', 'email' ]);

            await res.header('x-auth', token).send(resEmployeeInfo);
            
        } catch (e) {

            res.status(400).send(e);

        }
        
    });

    app.get('/employees', async (req, res) => {
                    
        try { 
            
            const employees = await Employees.find({});
            
            res.send({employees});
        
        } catch (e) {
    
            res.status(400).send(e);
    
        }
            
    });    

}