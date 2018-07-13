const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


require('./routes/employeeLogin')(app);



const PORT = process.env.PORT || 5000;
console.log(`Started on port : ${PORT}`);
app.listen(PORT);


