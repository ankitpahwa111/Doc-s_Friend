var express = require('express');
var router = express.Router();


let array=[]
let getDoctors= require('../../controllers/doctors').getDoctors;
router.get('/',(req,res)=>{
    
    getDoctors(req.query.radius,req.query.specialism,(array)=>{
        //console.log(array)
        res.send(array)
    }) 
    
    })
    
 
module.exports = router;