if(process.env.NODE_ENV === 'production') {

    // We are in product. Return the product keys here in this file.
    //module.exports = require('./prod');
    // console.log('process.env.NODE_ENV: production');

} else {

    module.exports = require('./dev');
	console.log('process.env.development');

}





