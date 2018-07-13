module.exports = (app) =>{

    // When user input id and passworld
    app.get('/employee', async (req, res) => {

        res.send('This is working');

    });


    app.post('/employee', async (req, res) => {

        res.send('This is posting');

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