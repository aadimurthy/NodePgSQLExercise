
import {Client} from 'pg';
import config  from 'config' ;

const DATABASE_URL = config.get('dbURL');


const client = new Client({
    connectionString: DATABASE_URL
  }); 

  
client.on('connect', () => {
    console.log('CONNECTED !!!');
  });
  

export default {
   query(command){
       return new Promise((resolve, reject) => {
         client.query(command)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {        
          reject(error);
        })
      })
    },
   connect(){client.connect()} 
  }  