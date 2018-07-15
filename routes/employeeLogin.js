const Employees = require('../models/employees')

const {}


module.exports = (app) =>{

    app.post('/employees', async (req, res) => {

        const employees = new Employees(req.body);

        try {

            await employees.save();

            const token = await user.generateAuthToken();

            res.header('x-auth', token).send(user);
        
            res.send('Data successfully sento server and database');

        } catch (e) {

            res.status(400).send(e);

        }
        
    });

    app.get('/employees', async (req, res) => {
                    
        try { 
            
            const employees = await Employees.find({});
            
            res.send({employees});
        
        }catch (e) {
    
            res.status(400).send(e);
    
        }
            
    });




    // app.post('/employee', async (req, res) => {

    //     const body = _.pick(req.body, [ 'email', 'password' ]);
    
    //     const users = new Users(body);
    
    //     try {
    
    //         await users.save();
    
    //         const token = await users.generateAuthToken();
    //         await res.header('x-auth', token).send(users);
    
    
    //     } catch(e) {
    
    //         res.status(400).send();
    
    //     }
    
    
        // users.save().then(() => {
    
        //     return users.generateAuthToken(); // returns "token"
    
        // }).then((token) => {
    
        //     res.header('x-auth', token).send(users);
    
        // }).catch((err) => res.status(400).send());
    
    //});
    

}