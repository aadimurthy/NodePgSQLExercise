"use strict";

import DB from "../model/dbConnection";

// SQL commands to input the data

//INSERT INTO posts ("userId",id,title,body) 
//VALUES (1,1, 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto');

//INSERT INTO "comments" (id,"postId",name,email,body) VALUES (1,1,'aadi','hello@gmail.com','random textttttt');

export default {

    async clearTables() {
        try {       
            const { rows } = await DB.query('TRUNCATE TABLE posts,"comments",users;');
            return rows[0];
          } catch(error) {
            return error;
          } 
        },

    async createUser() {
        try {       
            const cmd = {
                text: 'INSERT INTO users (id, "name", username, email, phone, website, "createdAt", "updatedAt")  VALUES($1, $2, $3, $4, $5, $6, $7, $8)',
                values: [1,'aadi','aadimurthy', 'hello@gmail.com', '9010664774', 'hello.com', new Date(), new Date()] 
            }
            const { rows } = await DB.query(cmd);
            return rows[0];
          } catch(error) {
            return error;
          } 
        },

    async createPost() {
        try {       
            const cmd = {
                text: 'INSERT INTO posts ("userId",id,title,body) VALUES($1, $2, $3, $4)',
                values: [1, 1,'Sample Postttt','Sample bodyyyyy'],
              };
            const { rows } = await DB.query(cmd);
            return rows[0];
          } catch(error) {
            return error;
          } 
        },


    async placeComment() {
        try {

            const cmd = {
                text: 'INSERT INTO "comments" (id,"postId",name,email,body) VALUES($1, $2, $3, $4, $5)',
                values: [1,1,'aadi','hello@gmail.com','Sample Comment!!!!!'],
              };       
            const { rows } = await DB.query(cmd);
            return rows[0];
          } catch(error) {
            return error;
          } 
        },

    async  getallPosts(){
    try {      
        const { rows } = await DB.query('SELECT * FROM posts');
        return  rows[0];
      } catch(error) {
        return error;
      } 
    },
     
    async getPostsByPostID(postId) {
        try {       
            const { rows } = await DB.query('SELECT * FROM posts WHERE id= $1',[postId]);
            return rows[0];
          } catch(error) {
            return error;
          } 
        },
    
    async getPostsByUserID(userId) {
        try {       
            const { rows } = await DB.query('SELECT * FROM posts WHERE "userId"=$1',[userId]);
            return rows[0];
          } catch(error) {
            return error;
          } 
        },    
    
    async getComments(){
        try {     
            const { rows } = await DB.query('SELECT * FROM "comments";');
            return rows[0];
          } catch(error) {
            return error;
          } 
        },
        
    async getCommentsbyID(postId){
            try {       
                const { rows } = await DB.query('SELECT * FROM "comments" WHERE "postId" = $1;',[postId]);
                return rows[0];
              } catch(error) {
                return error;
              } 
            }       


}
