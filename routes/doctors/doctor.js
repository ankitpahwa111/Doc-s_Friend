var express = require('express');
var router = express.Router();


let array=[];
let getDoctor= require('../../controllers/doctors').getDoctorbyID;
router.get('/',(req,res)=>{
    //console.log(typeof(getDoctor(req.query.id)))
    getDoctor(req.query.id,(array)=>{
        res.send(array);
    })
    
})
module.exports = router;