"use strict";
import controller from "./db/controller/dbController";

const getallPosts = async function(){
  try {      
      const res = await controller.getallPosts();
      return res;
    } catch(error) {
      return error;
    }
}

const getPostsbyID = async function(postId){
  try {      
      const res = await controller.getPostsByPostID(postId);
      return res;
    } catch(error) {
      return error;
    }
}

const getPostsbyUID = async function(userId){
  try {      
      const res = await controller.getPostsByUserID(userId);
      return res;
    } catch(error) {
      return error;
    }
}

const getAllComments = async function(){
  try {      
      const res = await controller.getComments();
      return res;
    } catch(error) {
      return error;
    }
}

const getCommentsByID = async function(postId){
  try {      
      const res = await controller.getCommentsbyID(postId);
      return res;
    } catch(error) {
      return error;
    }
}

module.exports = function test(){ (async () => {
  console.log(await getallPosts());
  console.log(await getPostsbyID(1));
  console.log(await getPostsbyUID(1));
  console.log(await getAllComments());
  console.log(await getCommentsByID(1));
})();}()
