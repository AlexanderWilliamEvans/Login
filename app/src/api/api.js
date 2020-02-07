const express = require('express');
const router = express.Router();
require('../../settings');



export async const login = (username, password) => {

 const res = await fetch();
 const status = await res.status;

 if(status === 200) {
   return true;
 }
 else {
   console.error(status);
   return false;
 }

};





router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;