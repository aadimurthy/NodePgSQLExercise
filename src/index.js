"use strict";
import DB from "./db/model/dbConnection";

const aadi = async function(){
    try {
        await DB.connect();       
        const { rows } = await DB.query('SELECT NOW();');
        return rows[0];
      } catch(error) {
        return error;
      }
}

module.exports = function test(){ (async () => {
  console.log(await aadi())
})();}()
