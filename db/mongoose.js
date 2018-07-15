console.log('mongoose just started');

const mongoose = require('mongoose');
const { mongoURI } = require('../configs/controls');

mongoose.Promise = global.Promise;

// new version of mongoose connect needs "{ useNewUrlParser: true }"
mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = {

    mongoose

};