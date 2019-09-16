const config = require('config');
const db = config.get('db');
const aadi = function(){

    console.log("db config is",db);
}

module.exports = aadi();