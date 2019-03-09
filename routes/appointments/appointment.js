var express = require('express');
var router = express.Router();


let AppId=1;
let getApp= require('../../controllers/appointments').getAppbyID
router.get('/',(req,res)=>{
    getApp(req.query.id,(results)=>{
        res.send(results);
    })
    
})
let putApp= require('../../controllers/appointments').putApp;
router.post('/',(req,res)=>{
    AppId++;
    let obj= {}
    putApp(AppId,req.body.DocId,req.body.PatientName,()=>{
        obj.Id=AppId;
        res.send(obj);
    })
    
})
module.exports = router;