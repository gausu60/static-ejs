var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.render('index',{
    name: "TutorialsPoint", 
    url:"http://www.tutorialspoint.com"
 });
});
router.get('/about',(req,res)=>{
    res.render('about');
})
router.get('/contact',(req,res)=>{
    res.render('contact');
})
router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });
//export this router to use in our index.js
module.exports = router;